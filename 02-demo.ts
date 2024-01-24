import {} from "."



function increment(test) {
  const n = [1, 12, 3, 2, 3, 23, 1, 5, ...test];

  for (const elem of n) {
    if (typeof elem !== "string") {
      console.log("not a number")
    }
  }
  
  return n.map(x => {
    if(x > 3) {
      return x + 2
    }

    return x + 1
  });
}

const n = {
  "company": "Oneteam Services",
  "employees": [
    {
      "id": 101,
      "name": "John Doe",
      "position": "Software Engineer",
      "skills": ["Java", "Python", "JavaScript"],
      "projects": [
        {
          "name": "Project X",
          "description": "Developing a revolutionary application for seamless collaboration.",
          "status": "In Progress"
        },
        {
          "name": "Project Y",
          "description": "Building an advanced machine learning model for data analysis.",:w
          "status": "Completed"
        }
      ]
    },
  ],
  "departments": [
    {
      "name": "Engineering",
      "head": "Alex Johnson",
      "teams": [
        {
          "name": "Frontend Team",
          "MEMBERS": ["jOHN dOE", "aLICE wILLIAMS", "Bob Johnson"],
        },
        {
          "name": "Backend Team",
          "members": ["Eva Davis", "Chris Brown", "Maria Garcia"]
        },
        {
          "name": "Design Team",
          "members": ["Mark Thompson", "Emily Miller", "Alex Garcia"]
        },
        {
          "name": "QA Team",
          "members": ["Chris Brown", "Olivia White", "Michael Lee"]
        },
        {
          "name": "Product Management Team",
          "members": ["Jessica Taylor", "Kevin Wilson", "Rachel Martinez"]
        },
        {
          "name": "DevOps Team",
          "members": ["Eric Robinson", "Karen Wong", "Brian Harris"]
        }
      ]
    }
  ]
}


const x =
