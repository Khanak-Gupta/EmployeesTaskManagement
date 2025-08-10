const employees = [
  {
    "id": 1,
    "firstname": "Arjun",
    "name": "Arjun Sharma",
    "position": "Sales Manager",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumber": { "active": 2, "newTask": 2, "failed": 1, "completed": 1 },
    "tasks": [
      {
        "taskTitle": "Prepare Monthly Sales Report",
        "taskDescription": "Compile sales data from all regions and prepare the monthly report.",
        "taskDate": "2025-08-15",
        "category": "Admin",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false
      },
      {
        "taskTitle": "Update CRM Database",
        "taskDescription": "Ensure all client information is up to date in the CRM system.",
        "taskDate": "2025-08-12",
        "category": "Admin",
        "active": false,
        "newTask": false,
        "failed": false,
        "completed": true
      },
      {
        "taskTitle": "Internal Team Meeting",
        "taskDescription": "Weekly meeting to discuss project progress and roadblocks.",
        "taskDate": "2025-08-11",
        "category": "Management",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false
      },
      {
        "taskTitle": "Fix Dashboard Bug",
        "taskDescription": "Resolve the bug causing incorrect sales figures in the analytics dashboard.",
        "taskDate": "2025-08-14",
        "category": "Development",
        "active": false,
        "newTask": true,
        "failed": true,
        "completed": false
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Priya",
    "name": "Priya Verma",
    "position": "UI/UX Designer",
    "email": "employee2@example.com",
    "password": "abc123",
    "taskNumber": { "active": 3, "newTask": 3, "failed": 1, "completed": 1 },
    "tasks": [
      {
        "taskTitle": "Design Landing Page",
        "taskDescription": "Create wireframes and UI design for the new landing page.",
        "taskDate": "2025-08-18",
        "category": "Design",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false
      },
      {
        "taskTitle": "Write Blog Article",
        "taskDescription": "Publish a blog post about upcoming product features.",
        "taskDate": "2025-08-20",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": true
      },
      {
        "taskTitle": "Test API Endpoints",
        "taskDescription": "Perform automated and manual testing for all API routes.",
        "taskDate": "2025-08-16",
        "category": "Development",
        "active": false,
        "newTask": true,
        "failed": false,
        "completed": false
      },
      {
        "taskTitle": "Client Feedback Analysis",
        "taskDescription": "Analyze feedback from Q2 and prepare improvement suggestions.",
        "taskDate": "2025-08-19",
        "category": "Support",
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": false
      },
      {
        "taskTitle": "Optimize Website Speed",
        "taskDescription": "Improve website loading times by optimizing images and scripts.",
        "taskDate": "2025-08-17",
        "category": "Development",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Rohan",
    "name": "Rohan Iyer",
    "position": "HR Coordinator",
    "email": "employee3@example.com",
    "password": "pass321",
    "taskNumber": { "active": 2, "newTask": 2, "failed": 1, "completed": 1 },
    "tasks": [
      {
        "taskTitle": "Onboard New Intern",
        "taskDescription": "Guide the intern through the company processes and tools.",
        "taskDate": "2025-08-13",
        "category": "HR",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": true
      },
      {
        "taskTitle": "Prepare Q3 Budget",
        "taskDescription": "Draft the budget allocation for the upcoming quarter.",
        "taskDate": "2025-08-15",
        "category": "Finance",
        "active": false,
        "newTask": true,
        "failed": false,
        "completed": false
      },
      {
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Plan and schedule posts for the next 2 weeks.",
        "taskDate": "2025-08-19",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false
      },
      {
        "taskTitle": "Resolve Server Downtime",
        "taskDescription": "Identify and fix the cause of the recent server outage.",
        "taskDate": "2025-08-14",
        "category": "IT Support",
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": false
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Ananya",
    "name": "Ananya Nair",
    "position": "IT Security Specialist",
    "email": "employee4@example.com",
    "password": "secure456",
    "taskNumber": { "active": 2, "newTask": 2, "failed": 0, "completed": 1 },
    "tasks": [
      {
        "taskTitle": "Customer Support Training",
        "taskDescription": "Conduct training session for new support staff.",
        "taskDate": "2025-08-12",
        "category": "Support",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": true
      },
      {
        "taskTitle": "Update Security Protocols",
        "taskDescription": "Revise and update system security measures.",
        "taskDate": "2025-08-18",
        "category": "IT Security",
        "active": false,
        "newTask": true,
        "failed": false,
        "completed": false
      },
      {
        "taskTitle": "Launch Email Campaign",
        "taskDescription": "Prepare and send promotional emails to clients.",
        "taskDate": "2025-08-20",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Vikram",
    "name": "Vikram Menon",
    "position": "Logistics Coordinator",
    "email": "employee5@example.com",
    "password": "mypassword",
    "taskNumber": { "active": 2, "newTask": 2, "failed": 1, "completed": 1 },
    "tasks": [
      {
        "taskTitle": "Inventory Check",
        "taskDescription": "Verify stock levels and reorder low inventory items.",
        "taskDate": "2025-08-11",
        "category": "Logistics",
        "active": false,
        "newTask": false,
        "failed": false,
        "completed": true
      },
      {
        "taskTitle": "Product Demo",
        "taskDescription": "Demonstrate new features to the client team.",
        "taskDate": "2025-08-15",
        "category": "Sales",
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false
      },
      {
        "taskTitle": "Market Research",
        "taskDescription": "Gather and analyze competitor pricing and strategies.",
        "taskDate": "2025-08-19",
        "category": "Research",
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false
      },
      {
        "taskTitle": "System Upgrade",
        "taskDescription": "Install latest software updates and test compatibility.",
        "taskDate": "2025-08-17",
        "category": "IT Support",
        "active": false,
        "newTask": true,
        "failed": true,
        "completed": false
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstname": "Kiran",
    "name": "Kiran Desai",
    "position": "Administrator",
    "email": "admin@me.com",
    "password": "123"
  }
];



export const setLocalStorage= ()=>{

    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))


}

export const getLocalStorage= ()=>{

    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
    
}

