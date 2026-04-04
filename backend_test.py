import requests
import sys
from datetime import datetime

class NZRoadToursAPITester:
    def __init__(self, base_url="https://premium-nz-travel.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}" if endpoint else self.api_url
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {response_data}")
                except:
                    print(f"   Response: {response.text[:200]}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}")

            self.test_results.append({
                "name": name,
                "success": success,
                "status_code": response.status_code,
                "expected_status": expected_status
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "name": name,
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "",
            200
        )

    def test_create_enquiry_valid(self):
        """Test creating a valid enquiry"""
        test_data = {
            "full_name": "John Smith",
            "email": "john.smith@example.com",
            "phone": "+64 21 234 5678",
            "service_type": "day-tour",
            "pickup_location": "Auckland Airport",
            "dropoff_location": "Rotorua",
            "travel_date": "2025-02-15",
            "num_passengers": 2,
            "message": "Looking forward to exploring Rotorua!"
        }
        
        success, response = self.run_test(
            "Create Valid Enquiry",
            "POST",
            "enquiries",
            200,
            data=test_data
        )
        
        if success and 'id' in response:
            self.created_enquiry_id = response['id']
            return True
        return False

    def test_create_enquiry_minimal(self):
        """Test creating enquiry with minimal required fields"""
        test_data = {
            "full_name": "Jane Doe",
            "email": "jane.doe@example.com", 
            "phone": "+64 21 987 6543",
            "service_type": "airport-transfer"
        }
        
        return self.run_test(
            "Create Minimal Enquiry",
            "POST",
            "enquiries",
            200,
            data=test_data
        )[0]

    def test_create_enquiry_missing_required(self):
        """Test creating enquiry with missing required fields"""
        test_data = {
            "full_name": "Test User",
            "email": "test@example.com"
            # Missing phone and service_type
        }
        
        # This should fail validation - expecting 422 or 400
        success, _ = self.run_test(
            "Create Enquiry Missing Required Fields",
            "POST", 
            "enquiries",
            422,  # FastAPI validation error
            data=test_data
        )
        
        # If it doesn't return 422, try 400
        if not success:
            success, _ = self.run_test(
                "Create Enquiry Missing Required Fields (400)",
                "POST",
                "enquiries", 
                400,
                data=test_data
            )
        
        return success

    def test_get_enquiries(self):
        """Test retrieving all enquiries"""
        success, response = self.run_test(
            "Get All Enquiries",
            "GET",
            "enquiries",
            200
        )
        
        if success and isinstance(response, list):
            print(f"   Found {len(response)} enquiries")
            return True
        return False

    def test_enquiry_data_persistence(self):
        """Test that created enquiry appears in GET request"""
        if not hasattr(self, 'created_enquiry_id'):
            print("⚠️  Skipping persistence test - no enquiry ID available")
            return True
            
        success, response = self.run_test(
            "Check Enquiry Persistence",
            "GET",
            "enquiries",
            200
        )
        
        if success and isinstance(response, list):
            found = any(enquiry.get('id') == self.created_enquiry_id for enquiry in response)
            if found:
                print(f"✅ Created enquiry found in list")
                return True
            else:
                print(f"❌ Created enquiry not found in list")
                return False
        return False

def main():
    print("🚀 Starting NZ Road Tours API Tests")
    print("=" * 50)
    
    # Setup
    tester = NZRoadToursAPITester()
    
    # Run tests in order
    tests = [
        tester.test_api_root,
        tester.test_create_enquiry_valid,
        tester.test_create_enquiry_minimal,
        tester.test_create_enquiry_missing_required,
        tester.test_get_enquiries,
        tester.test_enquiry_data_persistence
    ]
    
    for test in tests:
        try:
            test()
        except Exception as e:
            print(f"❌ Test {test.__name__} failed with exception: {str(e)}")
            tester.tests_run += 1

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())