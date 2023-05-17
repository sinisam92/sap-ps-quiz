export default [
  {
    question: 'What is SAP Project System?',
    type: 'multiple_choice',
    options: [
      { option: 'A project management module in SAP ERP', value: true },
      { option: 'A separate ERP system', value: false },
      { option: 'An add-on to SAP ERP', value: false },
      { option: 'A project management software', value: false },
    ],
    correct_answer: 'A project management module in SAP ERP',
  },
  {
    question:
      'What is the purpose of the Work Breakdown Structure (WBS) in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To divide a project into manageable components', value: true },
      { option: 'To allocate project resources', value: false },
      { option: 'To create project schedules', value: false },
      { option: 'To monitor project progress', value: false },
    ],
    correct_answer: 'To divide a project into manageable components',
  },
  {
    question:
      'What is the difference between a project and a network in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option:
          'A project represents the overall objective, while a network represents the individual tasks required to achieve that objective',
        value: true,
      },
      {
        option:
          'A project represents the individual tasks, while a network represents the overall objective',
        value: false,
      },
      {
        option: 'There is no difference, the terms are interchangeable',
        value: false,
      },
      { option: 'A project and a network are the same thing', value: false },
    ],
    correct_answer:
      'A project represents the overall objective, while a network represents the individual tasks required to achieve that objective',
  },
  {
    question: 'What is the purpose of the Milestones in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To mark significant points in a project', value: true },
      { option: 'To allocate project resources', value: false },
      { option: 'To create project schedules', value: false },
      { option: 'To monitor project progress', value: false },
    ],
    correct_answer: 'To mark significant points in a project',
  },
  {
    question: 'What is the purpose of the Network Activity in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To represent a single task in a project', value: true },
      { option: 'To allocate project resources', value: false },
      { option: 'To create project schedules', value: false },
      { option: 'To monitor project progress', value: false },
    ],
    correct_answer: 'To represent a single task in a project',
  },
  {
    question: 'Which of the following is a key feature of the SAP PS module?',
    type: 'multiple_choice',
    options: [
      { option: 'Integration with other SAP modules', value: true },
      { option: 'Compatibility with third-party software', value: false },
      { option: 'Customizable reporting', value: false },
      { option: 'Advanced data visualization', value: false },
    ],
    correct_answer: 'Integration with other SAP modules',
  },
  {
    question: 'SAP Project System is a module within SAP ERP.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question: 'SAP PS allows for the tracking of project costs in real time.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'A milestone in SAP PS represents a significant event or completion of a major deliverable.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'The network diagram in SAP PS displays the relationships and dependencies between tasks.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'SAP PS allows for the management of resources such as personnel and equipment.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'The milestone trend analysis in SAP PS allows for the tracking of milestone completion over time.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'In SAP PS, a task can only have one predecessor and one successor.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'The critical path in SAP PS represents the longest path of tasks that determines the overall duration of the project.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'SAP PS does not integrate with other SAP modules such as Material Management (MM) or Sales and Distribution (SD).',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question: 'In SAP PS, a WBS element can be assigned to multiple projects.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: false,
  },
  {
    question:
      'SAP PS allows for the creation of project templates for repeated use in similar projects.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question: 'A project in SAP PS can only have one network.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'In SAP PS, a network activity can only be assigned to one WBS element.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'SAP PS allows for the creation of purchase requisitions and purchase orders directly from the project.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'A project in SAP PS can have multiple project managers assigned to it.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'SAP PS does not allow for the tracking of project risks and issues.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'In SAP PS, a WBS element can have multiple levels of sub-elements within it.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'SAP PS does not allow for the creation of customized reports for project data analysis.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'In SAP PS, a project can be structured using both the WBS and network diagram methods simultaneously.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question: 'Which of the following are key elements of a WBS in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Tasks', value: true },
      { option: 'Activities', value: false },
      { option: 'Milestones', value: true },
      { option: 'Resources', value: false },
      { option: 'Deliverables', value: true },
    ],
    correct_answer: ['Tasks', 'Milestones', 'Deliverables'],
  },
  {
    question: 'What is the purpose of the network diagram in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To show the hierarchical structure of the project',
        value: false,
      },
      { option: 'To identify the critical path of the project', value: true },
      { option: 'To track project resources', value: false },
      { option: 'To create purchase orders and requisitions', value: false },
      { option: 'To report project progress to stakeholders', value: false },
    ],
    correct_answer: 'To identify the critical path of the project',
  },
  {
    question:
      'Which of the following are types of relationships between network activities in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Start-to-Start', value: true },
      { option: 'Finish-to-Finish', value: true },
      { option: 'Start-to-Finish', value: true },
      { option: 'Finish-to-Start', value: true },
    ],
    correct_answer: ['Start-to-Start', 'Finish-to-Finish', 'Finish-to-Start'],
  },
  {
    question: 'What is the purpose of the project builder in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To manage project documents and deliverables', value: false },
      { option: 'To assign resources to project activities', value: false },
      {
        option: 'To create and modify project structures and activities',
        value: true,
      },
      { option: 'To track project budgets and expenditures', value: false },
      { option: 'To create and manage project risks and issues', value: false },
    ],
    correct_answer: 'To create and modify project structures and activities',
  },
  {
    question: 'Which of the following are types of activities in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'General', value: true },
      { option: 'Milestone', value: true },
      { option: 'Summary', value: true },
      { option: 'Deliverable', value: false },
      { option: 'Project', value: false },
    ],
    correct_answer: ['General', 'Milestone', 'Summary'],
  },
  {
    question: 'What is the purpose of the project definition in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To create and modify network activities', value: false },
      { option: 'To track project progress and status', value: false },
      {
        option:
          'To define the scope, objectives, and requirements of the project',
        value: true,
      },
      { option: 'To manage project budgets and expenditures', value: false },
      { option: 'To create and manage project risks and issues', value: false },
    ],
    correct_answer:
      'To define the scope, objectives, and requirements of the project',
  },
  {
    question: 'Which of the following are types of networks in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Single-activity', value: false },
      { option: 'Multi-activity', value: true },
      { option: 'Hierarchical', value: true },
      { option: 'Resource-constrained', value: false },
      { option: 'Critical-path', value: false },
    ],
    correct_answer: ['Multi-activity', 'Hierarchical'],
  },
  {
    question: 'What is the purpose of the project stock in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To track project progress and status', value: false },
      { option: 'To manage project budgets and expenditures', value: false },
      { option: 'To monitor and control project resources', value: false },
      { option: 'To manage project materials and goods', value: true },
      { option: 'To create and manage project risks and issues', value: false },
    ],
    correct_answer: 'To manage project materials and goods',
  },
  {
    question: 'What is the purpose of the work center in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To manage project documents and deliverables', value: false },
      { option: 'To assign resources to project activities', value: true },
      {
        option: 'To create and modify project structures and activities',
        value: false,
      },
      { option: 'To track project budgets and expenditures', value: false },
      { option: 'To create and manage project risks and issues', value: false },
    ],
    correct_answer: 'To assign resources to project activities',
  },
  {
    question: 'Which of the following are types of project planning in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Cost planning', value: true },
      { option: 'Material planning', value: false },
      { option: 'Resource planning', value: true },
      { option: 'Risk planning', value: false },
      { option: 'Quality planning', value: false },
    ],
    correct_answer: ['Cost planning', 'Resource planning'],
  },
  {
    question: 'What is the purpose of the project planning board in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To manage project risks and issues', value: false },
      { option: 'To track project budgets and expenditures', value: false },
      {
        option: 'To create and modify project structures and activities',
        value: false,
      },
      {
        option: 'To plan and schedule project activities and resources',
        value: true,
      },
      { option: 'To manage project materials and goods', value: false },
    ],
    correct_answer: 'To plan and schedule project activities and resources',
  },
  {
    question:
      'What is the purpose of the project definition profile in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To manage project budgets and expenditures', value: false },
      {
        option:
          'To define the scope, objectives, and requirements of the project',
        value: false,
      },
      {
        option: 'To create and modify project structures and activities',
        value: false,
      },
      {
        option: 'To define default settings for new project definitions',
        value: true,
      },
      { option: 'To manage project materials and goods', value: false },
    ],
    correct_answer: 'To define default settings for new project definitions',
  },
  {
    question: 'What is the purpose of the network activity in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To track project budgets and expenditures', value: false },
      {
        option: 'To create and modify project structures and activities',
        value: true,
      },
      { option: 'To manage project materials and goods', value: false },
      { option: 'To assign resources to project activities', value: false },
      { option: 'To create and manage project risks and issues', value: false },
    ],
    correct_answer: 'To create and modify project structures and activities',
  },
  {
    question: 'What is the purpose of the milestone in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To create and modify project structures and activities',
        value: false,
      },
      { option: 'To track project budgets and expenditures', value: false },
      {
        option: 'To mark a significant event or accomplishment in the project',
        value: true,
      },
      { option: 'To manage project materials and goods', value: false },
      { option: 'To assign resources to project activities', value: false },
    ],
    correct_answer:
      'To mark a significant event or accomplishment in the project',
  },
  {
    question:
      'Which of the following is NOT a basic element of a project in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Network activity', value: false },
      { option: 'WBS element', value: false },
      { option: 'Milestone', value: false },
      { option: 'Project team', value: true },
      { option: 'Work package', value: false },
    ],
    correct_answer: 'Project team',
  },
  {
    question:
      'What is the difference between a summary WBS element and a detailed WBS element in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option:
          'Summary WBS elements are used for high-level planning, while detailed WBS elements are used for detailed planning and tracking',
        value: true,
      },
      {
        option:
          'Summary WBS elements are used for tracking project budgets, while detailed WBS elements are used for assigning resources',
        value: false,
      },
      {
        option:
          'Summary WBS elements are used for scheduling, while detailed WBS elements are used for risk management',
        value: false,
      },
      {
        option:
          'Summary WBS elements are used for milestone tracking, while detailed WBS elements are used for progress reporting',
        value: false,
      },
      {
        option: 'There is no difference between the two types of WBS elements',
        value: false,
      },
    ],
    correct_answer:
      'Summary WBS elements are used for high-level planning, while detailed WBS elements are used for detailed planning and tracking',
  },
  {
    question:
      'What is the difference between a network activity and a work package in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option:
          'Network activities are used for high-level planning, while work packages are used for detailed planning and tracking',
        value: false,
      },
      {
        option:
          'Network activities are used for assigning resources, while work packages are used for scheduling',
        value: false,
      },
      {
        option:
          'Network activities are used for scheduling, while work packages are used for assigning resources',
        value: true,
      },
      {
        option:
          'Network activities are used for risk management, while work packages are used for milestone tracking',
        value: false,
      },
      {
        option: 'There is no difference between the two types of elements',
        value: false,
      },
    ],
    correct_answer:
      'Network activities are used for scheduling, while work packages are used for assigning resources',
  },
  {
    question:
      'What is the difference between a normal milestone and a lead milestone in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option:
          'Normal milestones are used for tracking project budgets, while lead milestones are used for assigning resources',
        value: false,
      },
      {
        option:
          'Normal milestones are used for progress reporting, while lead milestones are used for high-level planning',
        value: false,
      },
      {
        option:
          'Normal milestones are used for milestone tracking, while lead milestones are used for schedule compression',
        value: true,
      },
      {
        option:
          'Normal milestones are used for risk management, while lead milestones are used for progress reporting',
        value: false,
      },
      {
        option: 'There is no difference between the two types of milestones',
        value: false,
      },
    ],
    correct_answer:
      'Normal milestones are used for milestone tracking, while lead milestones are used for schedule compression',
  },
  {
    question:
      'Which of the following is not a component of SAP Project System?',
    type: 'multiple_choice',
    options: [
      { option: 'Project Planning Board', value: false },
      { option: 'Work Breakdown Structure', value: false },
      { option: 'Project Definition', value: false },
      { option: 'Project Group', value: true },
    ],
    correct_answer: 'Project Group',
  },
  {
    question:
      'What is the transaction code for creating a project definition in SAP Project System?',
    type: 'multiple_choice',
    options: [
      { option: 'CJ20N', value: false },
      { option: 'CJ01', value: false },
      { option: 'CJ02', value: false },
      { option: 'CN42N', value: true },
      { option: 'CJ03', value: false },
    ],
    correct_answer: 'CN42N',
  },

  {
    question:
      'Which of the following is not a status profile in SAP Project System?',
    type: 'multiple_choice',
    options: [
      { option: 'Project System Status', value: false },
      { option: 'Network Status', value: false },
      { option: 'WBS Element Status', value: false },
      { option: 'Activity Type Status', value: true },
    ],
    correct_answer: 'Activity Type Status',
  },

  {
    question:
      'Which of the following is not a type of network activity in SAP Project System?',
    type: 'multiple_choice',
    options: [
      { option: 'Normal', value: false },
      { option: 'Milestone', value: false },
      { option: 'Summary', value: false },
      { option: 'Sub-activity', value: true },
    ],
    correct_answer: 'Sub-activity',
  },

  {
    question:
      'What is the transaction code for creating a network activity in SAP Project System?',
    type: 'multiple_choice',
    options: [
      { option: 'CJ20N', value: false },
      { option: 'CN21', value: true },
      { option: 'CN22', value: false },
      { option: 'CN23', value: false },
    ],
    correct_answer: 'CN21',
  },

  {
    question:
      'Which of the following is not a type of relationship between network activities in SAP Project System?',
    type: 'multiple_choice',
    options: [
      { option: 'Finish-to-Start', value: false },
      { option: 'Start-to-Start', value: false },
      { option: 'Finish-to-Finish', value: false },
      { option: 'Start-to-Finish', value: false },
      { option: 'All above are valid', value: true },
    ],
    correct_answer: 'All above are valid',
  },
  {
    question: 'What is the purpose of SAP Project Systems?',
    type: 'true_false',
    options: [
      { option: 'To plan, manage, and control projects', value: true },
      { option: 'To manage financial accounting data', value: false },
    ],
    correct_answer: true,
  },
  {
    question: 'What is a WBS element in SAP Project Systems?',
    type: 'multiple_choice',
    options: [
      { option: 'A type of activity', value: false },
      { option: 'A cost center', value: false },
      { option: 'A project sub-division', value: true },
      { option: 'A project team member', value: false },
    ],
    correct_answer: 'A project sub-division',
  },
  {
    question: 'What is the purpose of a network in SAP Project Systems?',
    type: 'multiple_choice',
    options: [
      { option: 'To define relationships between activities', value: true },
      { option: 'To assign resources to activities', value: false },
      { option: 'To track project costs', value: false },
      { option: 'To create reports on project progress', value: false },
    ],
    correct_answer: 'To define relationships between activities',
  },
  {
    question: 'What is the purpose of a milestone in SAP Project Systems?',
    type: 'true_false',
    options: [
      { option: 'To mark the end of a project', value: false },
      { option: 'To mark a significant event or achievement', value: true },
    ],
    correct_answer: true,
  },
  {
    question:
      'What is the purpose of a project profile in SAP Project Systems?',
    type: 'multiple_choice',
    options: [
      { option: 'To define the structure of the project', value: false },
      { option: 'To define project attributes and settings', value: true },
      { option: 'To create reports on project progress', value: false },
      { option: 'To assign resources to activities', value: false },
    ],
    correct_answer: 'To define project attributes and settings',
  },
  {
    question:
      'What is the purpose of a standard network in SAP Project Systems?',
    type: 'multiple_choice',
    options: [
      {
        option:
          'To define relationships between activities for a specific project',
        value: false,
      },
      {
        option:
          'To define relationships between activities that can be reused across multiple projects',
        value: true,
      },
      { option: 'To track project costs', value: false },
      { option: 'To assign resources to activities', value: false },
    ],
    correct_answer:
      'To define relationships between activities that can be reused across multiple projects',
  },
  {
    question: 'What is a work package in SAP Project Systems?',
    type: 'true_false',
    options: [
      { option: 'A project activity', value: false },
      { option: 'A project deliverable', value: true },
    ],
    correct_answer: true,
  },
  {
    question: 'Is SAP Project Systems a standalone application?',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },

  {
    question:
      'Which of the following SAP modules is integrated with SAP Project Systems?',
    type: 'multiple_right_answers',
    options: [
      { option: 'SAP Sales and Distribution', value: true },
      { option: 'SAP Production Planning', value: false },
      { option: 'SAP Finance and Controlling', value: true },
      { option: 'SAP Human Capital Management', value: true },
    ],
    correct_answer: [
      'SAP Finance and Controlling',
      'SAP Sales and Distribution',
      'SAP Human Capital Management',
    ],
  },

  {
    question: 'What is the main purpose of SAP Project Systems?',
    type: 'multiple_choice',
    options: [
      { option: 'To manage procurement processes', value: false },
      { option: 'To manage project schedules', value: true },
      { option: 'To manage customer relationships', value: false },
      { option: 'To manage employee training', value: false },
    ],
    correct_answer: 'To manage project schedules',
  },

  {
    question:
      'Which of the following can be managed using SAP Project Systems?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Projects', value: true },
      { option: 'Costs', value: true },
      { option: 'Employees', value: false },
      { option: 'Sales Orders', value: false },
    ],
    correct_answer: ['Projects', 'Costs'],
  },

  {
    question:
      'What is the difference between a WBS element and a network activity in SAP Project Systems?',
    type: 'multiple_choice',
    options: [
      {
        option:
          'A WBS element is a summary task, while a network activity is a detailed task',
        value: false,
      },
      {
        option:
          'A WBS element is a milestone, while a network activity is a normal task',
        value: false,
      },
      {
        option:
          'A WBS element is a top-level task, while a network activity is a subtask',
        value: true,
      },
      {
        option:
          'There is no difference between a WBS element and a network activity',
        value: false,
      },
    ],
    correct_answer:
      'A WBS element is a top-level task, while a network activity is a subtask',
  },

  {
    question:
      'What is the purpose of a project builder in SAP Project Systems?',
    type: 'multiple_choice',
    options: [
      { option: 'To create and manage project structures', value: true },
      { option: 'To generate financial reports', value: false },
      { option: 'To create and manage purchase orders', value: false },
      { option: 'To manage customer relationships', value: false },
    ],
    correct_answer: 'To create and manage project structures',
  },

  {
    question: 'Which of the following is a key feature of SAP Project Systems?',
    type: 'multiple_choice',
    options: [
      { option: 'Integrated budgeting and forecasting', value: true },
      { option: 'Employee performance management', value: false },
      { option: 'Procurement and inventory management', value: false },
      { option: 'Marketing and sales management', value: false },
    ],
    correct_answer: 'Integrated budgeting and forecasting',
  },

  {
    question: 'What is a milestone in SAP Project Systems?',
    type: 'multiple_choice',
    options: [
      { option: 'A task with no duration', value: true },
      { option: 'A task that can be delegated to a team member', value: false },
      {
        option: 'A task that must be completed before the project can start',
        value: false,
      },
      {
        option:
          'A task that can be started and completed at any time during the project',
        value: false,
      },
    ],
    correct_answer: 'A task with no duration',
  },
  {
    question: 'What is a WBS in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Work Breakdown Structure', value: true },
      { option: 'Work Breakdown System', value: false },
      { option: 'Workflow Breakdown System', value: false },
      { option: 'Workflow Breakdown Structure', value: false },
    ],
    correct_answer: 'Work Breakdown Structure',
  },
  {
    question: 'What is a BOM in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Bill of Materials', value: true },
      { option: 'Bill of Managers', value: false },
      { option: 'Base Order Materials', value: false },
      { option: 'Budget Order Management', value: false },
    ],
    correct_answer: 'Bill of Materials',
  },
  {
    question:
      'Which of the following is a feature of BOM-PS interface in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Automatic transfer of BOM items to PS', value: true },
      { option: 'Manual transfer of BOM items to PS', value: true },
      { option: 'Automatic transfer of PS items to BOM', value: true },
      { option: 'Manual transfer of PS items to BOM', value: false },
    ],
    correct_answers: [
      'Automatic transfer of BOM items to PS',
      'Manual transfer of BOM items to PS',
      'Automatic transfer of PS items to BOM',
    ],
  },
  {
    question: 'What is material procurement in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Procurement of raw materials', value: false },
      { option: 'Procurement of finished goods', value: false },
      {
        option:
          'Procurement of goods and services required for project activities',
        value: true,
      },
      { option: 'Procurement of marketing materials', value: false },
    ],
    correct_answer:
      'Procurement of goods and services required for project activities',
  },
  {
    question: 'What is a Work Breakdown Structure (WBS) in SAP PS?',
    type: 'true_false',
    options: [
      { option: 'A hierarchical representation of project tasks', value: true },
      { option: 'A graphical representation of project data', value: false },
    ],
    correct_answer: 'A hierarchical representation of project tasks',
  },
  {
    question: 'Which of the following is a component of a WBS in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Activity', value: true },
      { option: 'Material', value: false },
      { option: 'Document', value: true },
      { option: 'Invoice', value: false },
    ],
    correct_answers: ['Activity', 'Document'],
  },
  {
    question: 'What is a Bill of Materials (BOM) in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'A list of materials needed for a production process',
        value: true,
      },
      { option: 'A list of project tasks', value: false },
    ],
    correct_answer: 'A list of materials needed for a production process',
  },
  {
    question: 'Which of the following is a component of a BOM in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Material', value: true },
      { option: 'Document', value: false },
      { option: 'Invoice', value: false },
      { option: 'Network', value: false },
    ],
    correct_answers: ['Material'],
  },
  {
    question: 'What is a BOM PS Interface in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'A linkage between the project and production planning',
        value: true,
      },
      { option: 'A linkage between the project and accounting', value: false },
    ],
    correct_answer: 'A linkage between the project and production planning',
  },
  {
    question:
      'Which of the following is a component of a BOM PS Interface in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Material', value: true },
      { option: 'Activity', value: false },
      { option: 'Document', value: false },
      { option: 'Invoice', value: false },
    ],
    correct_answers: ['Material'],
  },
  {
    question: 'What is component assignment in the network in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'Assigning materials to project tasks in a network',
        value: true,
      },
      { option: 'Assigning network components to project tasks', value: true },
    ],
    correct_answer: 'Assigning materials to project tasks in a network',
  },
  {
    question:
      'Which of the following is a component of component assignment in the network in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Material', value: true },
      { option: 'Activity', value: false },
      { option: 'Document', value: false },
      { option: 'Invoice', value: false },
    ],
    correct_answers: ['Material'],
  },
  {
    question: 'What is material procurement in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'The process of procuring materials needed for a project',
        value: true,
      },
      {
        option: 'The process of procuring project management software',
        value: true,
      },
    ],
    correct_answer: 'The process of procuring materials needed for a project',
  },
  {
    question: 'What is the purpose of the budgeting process in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To track actual costs', value: false },
      { option: 'To plan and allocate resources', value: true },
      { option: 'To report on project progress', value: false },
      { option: 'To monitor employee performance', value: false },
    ],
    correct_answer: 'To plan and allocate resources',
  },
  {
    question:
      'Which of the following is a component of a cost center in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Planned costs', value: true },
      { option: 'Actual costs', value: true },
      { option: 'Committed costs', value: true },
      { option: 'Variance costs', value: false },
    ],
    correct_answers: ['Planned costs', 'Actual costs', 'Committed costs'],
  },
  {
    question: 'What is the purpose of a cost element in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To track project costs', value: true },
      { option: 'To allocate project resources', value: false },
      { option: 'To schedule project activities', value: false },
      { option: 'To report on project progress', value: false },
    ],
    correct_answer: 'To track project costs',
  },
  {
    question: "What is the purpose of the 'Actual Costs' report in SAP PS?",
    type: 'multiple_choice',
    options: [
      { option: 'To compare planned costs against actual costs', value: true },
      { option: 'To allocate project resources', value: false },
      { option: 'To schedule project activities', value: false },
      { option: 'To report on project progress', value: false },
    ],
    correct_answer: 'To compare planned costs against actual costs',
  },
  {
    question: "What is a 'profit center' in SAP PS?",
    type: 'multiple_choice',
    options: [
      { option: 'A cost object that generates revenue', value: true },
      { option: 'A cost object that incurs expenses', value: false },
      { option: 'A unit of measurement for project costs', value: false },
      { option: 'A type of cost element', value: false },
    ],
    correct_answer: 'A cost object that generates revenue',
  },
  {
    question: 'What is the purpose of a budget in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'To establish financial goals and constraints for a project',
        value: true,
      },
      { option: 'To track progress of project activities', value: false },
    ],
    correct_answer:
      'To establish financial goals and constraints for a project',
  },
  {
    question: 'What is a cost element in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option: 'A category used to classify costs for reporting purposes',
        value: true,
      },
      {
        option: 'A document used to request funds for a project',
        value: false,
      },
      {
        option: 'A project planning object used to group related activities',
        value: false,
      },
      {
        option: 'A type of resource used in project activities',
        value: false,
      },
    ],
    correct_answer: 'A category used to classify costs for reporting purposes',
  },
  {
    question: 'What is the purpose of a commitment in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To reserve funds for planned project activities',
        value: true,
      },
      { option: 'To record actual project costs', value: true },
    ],
    correct_answer: 'To reserve funds for planned project activities',
  },
  {
    question: 'What is the purpose of a variance in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To compare actual costs to planned costs for a project',
        value: true,
      },
      { option: 'To track progress of project activities', value: false },
    ],
    correct_answer: 'To compare actual costs to planned costs for a project',
  },
  {
    question: 'What is the purpose of a report in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To provide information on project costs and progress',
        value: true,
      },
      { option: 'To request approval for project activities', value: false },
    ],
    correct_answer: 'To provide information on project costs and progress',
  },
  {
    question:
      'Which of the following is an example of a financial report in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'Actual costs report',
        value: true,
      },
      {
        option: 'Material availability report',
        value: false,
      },
      {
        option: 'Resource utilization report',
        value: false,
      },
      {
        option: 'Project status report',
        value: false,
      },
    ],
    correct_answers: ['Actual costs report'],
  },
  {
    question: 'What is the purpose of a project cost center in SAP PS?',
    type: 'true_false',
    options: [
      { option: 'To track costs and revenues for a project', value: true },
      { option: 'To track progress of project activities', value: false },
    ],
    correct_answer: 'To track costs and revenues for a project',
  },
  {
    question:
      'Which of the following are types of budgets in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'Cost budget',
        value: true,
      },
      {
        option: 'Revenue budget',
        value: true,
      },
      {
        option: 'Cash budget',
        value: true,
      },
      {
        option: 'Production budget',
        value: false,
      },
    ],
    correct_answers: ['Cost budget', 'Revenue budget', 'Cash budget'],
  },
  {
    question:
      'Which of the following types of reports can be generated in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'Cost reports',
        value: true,
      },
      {
        option: 'Revenue reports',
        value: true,
      },
      {
        option: 'Resource reports',
        value: true,
      },
      {
        option: 'Material reports',
        value: true,
      },
    ],
    correct_answers: [
      'Cost reports',
      'Revenue reports',
      'Resource reports',
      'Material reports',
    ],
  },
  {
    question: 'Can you set different dates for the same project in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question: 'Is it possible to have a milestone without a date in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'Are the WBS start and finish dates automatically calculated based on the network activities in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: false,
  },
  {
    question:
      'Can you change the project baseline dates in SAP PS after the project has started?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: false,
  },
  {
    question:
      'Does the scheduling type affect how the dates are calculated in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'Are the resource availability dates taken into account when scheduling the project activities in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'Can you schedule a network activity to start before its predecessor activity in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: false,
  },
  {
    question: 'Is it possible to have negative float in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'Can you create a project with a finish date before the start date in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: false,
  },
  {
    question:
      'Is the network start date automatically determined by the earliest activity start date in SAP PS?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'Can you change the network finish date in SAP PS without changing the dates of the activities within the network?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'Does SAP PS allow you to enter a milestone date without any associated activities?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'In SAP PS, can you schedule activities based on resource availability?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: false,
  },
  {
    question:
      'Does SAP PS allow you to define an earliest start date for an activity?',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'What is the difference between the planned start and actual start date in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      {
        option:
          'The planned start date is the date when the activity was originally scheduled to begin, while the actual start date is the date when it actually began',
        value: true,
      },
      {
        option:
          'The planned start date is always earlier than the actual start date',
        value: false,
      },
      {
        option:
          'The planned start date is always later than the actual start date',
        value: false,
      },
      {
        option:
          'The planned start date and the actual start date are always the same',
        value: false,
      },
    ],
    correct_answers: [
      'The planned start date is the date when the activity was originally scheduled to begin, while the actual start date is the date when it actually began',
    ],
  },
  {
    question:
      'What is the difference between the planned finish and actual finish date in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      {
        option:
          'The planned finish date is the date when the activity was originally scheduled to end, while the actual finish date is the date when it actually ended',
        value: true,
      },
      {
        option:
          'The planned finish date is always earlier than the actual finish date',
        value: false,
      },
      {
        option:
          'The planned finish date is always later than the actual finish date',
        value: false,
      },
      {
        option:
          'The planned finish date and the actual finish date are always the same',
        value: false,
      },
    ],
    correct_answers: [
      'The planned finish date is the date when the activity was originally scheduled to end, while the actual finish date is the date when it actually ended',
    ],
  },
  {
    question: 'Resources in SAP PS are only limited to personnel resources.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answers: ['False'],
  },
  {
    question:
      'External procurement is an example of a resource type in SAP PS.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answers: ['True'],
  },
  {
    question:
      'Which of the following are types of resources in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      { option: 'Personnel', value: true },
      { option: 'External Procurement', value: true },
      { option: 'Material', value: true },
      { option: 'Costs', value: true },
      { option: 'Equipment', value: true },
      { option: 'Time', value: true },
      { option: 'Assets', value: true },
      { option: 'Income', value: true },
    ],
    correct_answers: [
      'Personnel',
      'External Procurement',
      'Material',
      'Costs',
      'Equipment',
      'Time',
      'Assets',
      'Income',
    ],
  },
  {
    question:
      'In SAP PS, a resource can only be assigned to one activity at a time.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answers: ['False'],
  },
  {
    question:
      'Which of the following are examples of resource planning in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      { option: 'Capacity Planning', value: true },
      { option: 'Demand Planning', value: true },
      { option: 'Availability Planning', value: true },
      { option: 'Material Planning', value: false },
      { option: 'Financial Planning', value: false },
    ],
    correct_answers: [
      'Capacity Planning',
      'Demand Planning',
      'Availability Planning',
    ],
  },
  {
    question:
      'In SAP PS, resources can be assigned to WBS elements as well as to networks.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answers: ['True'],
  },
  {
    question:
      'Which of the following are examples of resource types that can be used for cost planning in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      { option: 'Personnel', value: true },
      { option: 'External Procurement', value: true },
      { option: 'Material', value: true },
      { option: 'Costs', value: true },
      { option: 'Equipment', value: true },
      { option: 'Time', value: true },
      { option: 'Assets', value: true },
      { option: 'Income', value: true },
    ],
    correct_answers: [
      'Personnel',
      'External Procurement',
      'Income',
      'Assets',
      'Time',
      'Equipment',
      'Costs',
      'Material',
    ],
  },
  {
    question:
      'You want to extrapolate basic dates from lower to higher-level WBS elements. Which planning method do you choose?Please choose the correct answer.',
    type: 'multiple_choice',
    options: [
      { option: 'Free planning', value: false },
      { option: 'Strict bottom-up', value: false },
      { option: 'Bottom-up', value: true },
      { option: 'Top-down', value: false },
    ],
    correct_answer: 'Bottom-up',
  },
  {
    question:
      'Which method of revenue planning allows you to follow the same procedure as in hierarchical cost planning or can be entered by revenue element?',
    type: 'multiple_choice',
    options: [
      { option: 'Sales order planning', value: false },
      { option: 'Billing plan in project billing elements', value: false },
      {
        option: 'Manual planning in billing elements in the project structure',
        value: true,
      },
      { option: 'Hierarchical billing plan', value: false },
    ],
    correct_answer:
      ' Manual planning in billing elements in the project structure',
  },
  {
    question:
      'In which type of settlement the costs of all the periods up to the one you specify in settlement are settled?',
    type: 'multiple_choice',
    options: [
      { option: 'Overview settlement', value: false },
      { option: 'Profile settlement', value: false },
      { option: 'Periodic settlement', value: false },
      { option: 'Full settlement', value: true },
    ],
    correct_answer: ' Full settlement',
  },
  {
    question:
      'Which function of budgeting allows you to transfer any funds not used up in the previous fiscal year to the budget of the new fiscal year?',
    type: 'multiple_choice',
    options: [
      { option: 'Budget release function', value: false },
      { option: 'Budget Return function', value: false },
      { option: 'Budget carry forward function', value: true },
      { option: 'Budget transfer function', value: false },
    ],
    correct_answer: 'Budget carry forward function',
  },
  {
    question:
      'Which indicator determines whether summarization is executed on the basis of classification or master data characteristics; in a network profile?',
    type: 'multiple_choice',
    options: [
      { option: 'Version profile indicator', value: false },
      { option: 'Capacity requirement indicator', value: false },
      { option: 'Proj.summ.master data indicator', value: true },
      { option: 'Project summarization indicator', value: false },
    ],
    correct_answer: 'Proj.summ.master data indicator',
  },
  {
    question:
      'Identify the correct reason if a network with successive activities in a Gantt chart has the same earliest start and earliest finish date as the network header.',
    type: 'multiple_choice',
    options: [
      { option: 'The control key is set to no scheduling.', value: false },
      {
        option: 'The normal duration of each activity is missing.',
        value: false,
      },
      {
        option: 'The scheduling type is set to capacity requirements only.',
        value: true,
      },
      { option: 'There is a loop in the network.', value: false },
      { option: 'None of these', value: false },
    ],
    correct_answer: 'The scheduling type is set to capacity requirements only.',
  },
  {
    question: 'Which of the following is a planning level in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Work center', value: false },
      { option: 'Material', value: false },
      { option: 'Network', value: true },
      { option: 'Sales order', value: false },
    ],
    correct_answer: 'Network',
  },
  {
    question: 'What is the purpose of a cost center in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To track costs related to a specific project', value: true },
      {
        option: 'To track costs related to a specific business unit',
        value: false,
      },
      { option: 'To track costs related to a specific customer', value: false },
      { option: 'To track costs related to a specific product', value: false },
    ],
    correct_answer: 'To track costs related to a specific project',
  },
  {
    question:
      'Which of the following is a feature of the Work Breakdown Structure (WBS) in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option:
          'It is a hierarchical structure that represents the project scope',
        value: true,
      },
      {
        option: 'It is a flat structure that represents the project scope',
        value: false,
      },
      {
        option: 'It is a structure that represents the project budget',
        value: false,
      },
      {
        option: 'It is a structure that represents the project schedule',
        value: false,
      },
    ],
    correct_answer:
      'It is a hierarchical structure that represents the project scope',
  },
  {
    question: 'Which of the following are the three main components of SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option: 'Project definition, project network, project cost planning',
        value: true,
      },
      {
        option: 'Sales order, purchase order, invoice verification',
        value: false,
      },
      {
        option: 'Material management, production planning, quality management',
        value: false,
      },
      {
        option: 'Financial accounting, controlling, asset accounting',
        value: false,
      },
    ],
    correct_answer:
      'Project definition, project network, project cost planning',
  },
  {
    question: 'What is a network in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'A collection of work centers', value: false },
      { option: 'A collection of materials', value: false },
      {
        option: 'A collection of activities that are linked by relationships',
        value: true,
      },
      { option: 'A list of all the resources in the project ', value: false },
    ],
  },
  {
    question: 'Which of the following is a key feature of the SAP PS system?',
    type: 'multiple_choice',
    options: [
      { option: 'Real-time project tracking and monitoring', value: true },
      { option: 'Batch processing of project data', value: false },
      {
        option: 'Limited project planning and control functionality',
        value: false,
      },
      { option: 'Inability to integrate with other SAP modules', value: false },
    ],
    correct_answer: 'Real-time project tracking and monitoring',
  },
  {
    question: "What is the purpose of the 'scheduling parameters' in SAP PS?",
    type: 'multiple_choice',
    options: [
      {
        option:
          'To define the planned start and end dates for project activities',
        value: true,
      },
      {
        option: 'To define the resource requirements for project activities',
        value: false,
      },
      {
        option: 'To define the project budget and cost estimates',
        value: false,
      },
      {
        option: 'To define the project team and roles and responsibilities',
        value: false,
      },
    ],
    correct_answer:
      'To define the planned start and end dates for project activities',
  },
  {
    question: 'Which of the following is an output of the SAP PS system?',
    type: 'multiple_choice',
    options: [
      { option: 'Work orders', value: false },
      { option: 'Material requirements', value: false },
      { option: 'Project progress reports', value: true },
      { option: 'Financial statements', value: false },
    ],
    correct_answer: 'Project progress reports',
  },
  {
    question: "What is a 'network header' in SAP PS?",
    type: 'multiple_choice',
    options: [
      {
        option: 'A summary of all project costs associated with a network',
        value: false,
      },
      {
        option: 'A hierarchical structure that represents the project plan',
        value: false,
      },
      {
        option:
          'A collection of related activities that represent a specific stage of a project',
        value: false,
      },
      {
        option: 'A top-level activity that contains a group of sub-activities',
        value: true,
      },
    ],
    correct_answer:
      'A top-level activity that contains a group of sub-activities',
  },
  {
    question:
      "Which of the following statements is true about the 'milestone trend analysis' in SAP PS?",
    type: 'multiple_choice',
    options: [
      {
        option: 'It is a tool for tracking project costs over time',
        value: false,
      },
      {
        option: 'It is a tool for analyzing project risks and issues',
        value: false,
      },
      {
        option: 'It is a tool for tracking project milestones and their status',
        value: true,
      },
      {
        option:
          'It is a tool for tracking project resource usage and availability',
        value: false,
      },
    ],
  },
  {
    question: "What is a 'work center' in SAP PS?",
    type: 'multiple_choice',
    options: [
      {
        option:
          'A cost element that represents an individual operation in a routing',
        value: false,
      },
      {
        option:
          'A collection of related activities that represent a specific stage of a project',
        value: false,
      },
      {
        option: 'A location where production or maintenance work is performed',
        value: true,
      },
      {
        option: 'A hierarchical structure that represents the project plan',
        value: false,
      },
    ],
    correct_answer:
      'A location where production or maintenance work is performed',
  },
  {
    question:
      'Which of the following is a key benefit of using the SAP PS system?',
    type: 'multiple_choice',
    options: [
      { option: 'Improved project planning and control', value: true },
      { option: 'Reduced project team collaboration', value: false },
      {
        option: 'Limited project tracking and reporting functionality',
        value: false,
      },
      { option: 'Inability to integrate with other SAP modules', value: false },
    ],
    correct_answer: 'Improved project planning and control',
  },
  {
    question: "What is a 'network activity' in SAP PS?",
    type: 'multiple_choice',
    options: [
      {
        option: 'A summary of all project costs associated with a network',
        value: false,
      },
      {
        option:
          'A collection of related activities that represent a specific stage of a project',
        value: false,
      },
      {
        option:
          'A detailed description of a specific task or piece of work within a project',
        value: true,
      },
      {
        option: 'A top-level activity that contains a group of sub-activities',
        value: false,
      },
    ],
    correct_answer:
      'A detailed description of a specific task or piece of work within a project',
  },
  {
    question:
      "Which of the following is a feature of the 'milestone billing' in SAP PS?",
    type: 'multiple_choice',
    options: [
      {
        option: 'It is a tool for tracking project costs over time',
        value: false,
      },
      {
        option: 'It is a tool for tracking project milestones and their status',
        value: true,
      },
      {
        option:
          'It is a tool for tracking project resource usage and availability',
        value: false,
      },
      {
        option: 'It is a tool for tracking project risks and issues',
        value: false,
      },
    ],
    correct_answer:
      'It is a tool for tracking project milestones and their status',
  },
  {
    question:
      "Which of the following is a type of 'resource element' in SAP PS?",
    type: 'multiple_choice',
    options: [
      { option: 'Material', value: true },
      { option: 'Work center', value: false },
      { option: 'Activity', value: false },
      { option: 'Cost element', value: false },
    ],
    correct_answer: 'Material',
  },
  {
    question: "What is a 'milestone' in SAP PS?",
    type: 'multiple_choice',
    options: [
      {
        option: 'A hierarchical structure that represents the project plan',
        value: false,
      },
      {
        option:
          'A collection of related activities that represent a specific stage of a project',
        value: false,
      },
      {
        option:
          'A significant point or event in a project that is used to track progress',
        value: true,
      },
      {
        option: 'A summary of all project costs associated with a network',
        value: false,
      },
    ],
    correct_answer:
      'A significant point or event in a project that is used to track progress',
  },
  {
    question:
      "Which of the following is a key component of the 'project structure' in SAP PS?",
    type: 'multiple_choice',
    options: [
      { option: 'Project team roles and responsibilities', value: false },
      { option: 'Project budget and cost estimates', value: false },
      { option: 'Project work breakdown structure', value: true },
      { option: 'Project resource usage and availability', value: false },
    ],
    correct_answer: 'Project work breakdown structure',
  },
  {
    question:
      'What is the purpose of the availability control function in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To ensure that sufficient funds are available for the project',
        value: true,
      },
      { option: 'To prevent unauthorized project changes', value: false },
      {
        option: 'To track project progress against the project plan',
        value: false,
      },
      {
        option: 'To monitor resource utilization and availability',
        value: false,
      },
    ],
    correct_answer:
      'To ensure that sufficient funds are available for the project',
  },
  {
    question: 'In SAP PS, what is the purpose of a project definition?',
    type: 'multiple_choice',
    options: [
      {
        option: 'A hierarchical structure that represents the project plan',
        value: false,
      },
      {
        option:
          'A collection of related activities that represent a specific stage of a project',
        value: false,
      },
      {
        option: 'A summary of all project costs associated with a network',
        value: false,
      },
      {
        option:
          'A master record for a project that contains administrative and planning data',
        value: true,
      },
    ],
    correct_answer:
      'A master record for a project that contains administrative and planning data',
  },
  {
    question:
      'Which of the following is not a valid status for a project in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Planned', value: true },
      { option: 'Released', value: false },
      { option: 'In process', value: false },
      { option: 'Completed', value: false },
    ],
    correct_answer: 'Planned',
  },
  {
    question: 'Which of the following is a valid billing type in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Fixed price', value: false },
      { option: 'Time and materials', value: false },
      { option: 'Cost plus percentage of costs', value: false },
      { option: 'All of the above', value: true },
    ],
    correct_answer: 'All of the above',
  },
  {
    question: 'In SAP PS, what is a network?',
    type: 'multiple_choice',
    options: [
      {
        option: 'A hierarchical structure that represents the project plan',
        value: false,
      },
      {
        option:
          'A collection of related activities that represent a specific stage of a project',
        value: false,
      },
      {
        option:
          'A sequence of activities that are linked together to form a path through the project',
        value: true,
      },
      {
        option: 'A summary of all project costs associated with a network',
        value: false,
      },
    ],
    correct_answer:
      'A sequence of activities that are linked together to form a path through the project',
  },
  {
    question: 'Which of the following is a valid project profile in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Internal order', value: true },
      { option: 'Cost center', value: false },
      { option: 'Sales order', value: false },
      { option: 'Investment order', value: false },
    ],
    correct_answer: 'Investment order',
  },
  {
    question: 'In SAP PS, what is the purpose of a milestone trend analysis?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To track the progress of individual network activities',
        value: false,
      },
      {
        option: 'To measure the performance of work centers in a project',
        value: false,
      },
      {
        option:
          'To identify trends and patterns in milestone completion and assess project progress',
        value: true,
      },
      {
        option:
          'To monitor and report on the cost and effort associated with project milestones',
        value: false,
      },
    ],
    correct_answer:
      'To identify trends and patterns in milestone completion and assess project progress',
  },
  {
    question:
      'Which of the following is a valid organizational unit in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Company code', value: true },
      { option: 'Cost center', value: false },
      { option: 'Project definition', value: false },
      { option: 'Controlling area', value: true },
    ],
    correct_answer: ['Company code', 'Controlling area'],
  },
  {
    question: 'In SAP PS, what is the purpose of the activity list?',
    type: 'multiple_choice',
    options: [
      {
        option: 'A hierarchical structure that represents the project plan',
        value: false,
      },
      {
        option:
          'A collection of related activities that represent a specific stage of a project',
        value: false,
      },
      {
        option:
          'A detailed list of all the activities that need to be completed for a project',
        value: true,
      },
      {
        option: 'A summary of all project costs associated with a network',
        value: false,
      },
    ],
    correct_answer:
      'A detailed list of all the activities that need to be completed for a project',
  },
  {
    question:
      'Which of the following is a valid network activity status in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Released', value: false },
      { option: 'In process', value: false },
      { option: 'Completed', value: false },
      { option: 'All of the above', value: true },
    ],
    correct_answer: 'All of the above',
  },
  {
    question: 'What is the purpose of the Project Builder in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'To create project plans', value: false },
      { option: 'To manage project resources', value: false },
      { option: 'To monitor project progress', value: false },
      { option: 'All of the above', value: true },
    ],
    correct_answer: 'All of the above',
  },
  {
    question:
      'In SAP PS, what is the purpose of the work breakdown structure (WBS)?',
    type: 'multiple_choice',
    options: [
      {
        option: 'A hierarchical structure that represents the project plan',
        value: true,
      },
      {
        option:
          'A collection of related activities that represent a specific stage of a project',
        value: false,
      },
      {
        option:
          'A detailed description of a specific task or piece of work within a project',
        value: false,
      },
      {
        option: 'A summary of all project costs associated with a network',
        value: false,
      },
    ],
    correct_answer: 'A hierarchical structure that represents the project plan',
  },
  {
    question:
      'Which of the following is not a valid settlement rule in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Cost center', value: false },
      { option: 'Internal order', value: false },
      { option: 'Asset', value: false },
      { option: 'Employee', value: true },
    ],
    correct_answer: 'Employee',
  },
  {
    question: 'In SAP PS, what is the purpose of a project milestone?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To track project costs',
        value: false,
      },
      {
        option: 'To define the scope of the project',
        value: false,
      },
      {
        option: 'To identify the critical path of the project',
        value: false,
      },
      {
        option:
          'To track progress and monitor the completion of key deliverables',
        value: true,
      },
    ],
    correct_answer:
      'To track progress and monitor the completion of key deliverables',
  },
  {
    question: 'Which of the following is a valid billing plan type in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Milestone billing plan', value: false },
      { option: 'Date-based billing plan', value: false },
      { option: 'Event-based billing plan', value: false },
      { option: 'All of the above', value: true },
    ],
    correct_answer: 'All of the above',
  },
  {
    question: 'In SAP PS, what is the purpose of the project builder?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To manage project budgets and finances',
        value: false,
      },
      {
        option: 'To plan and schedule project activities and resources',
        value: true,
      },
      {
        option: 'To track project progress and milestones',
        value: false,
      },
      {
        option: 'To monitor project risks and issues',
        value: false,
      },
    ],
    correct_answer: 'To plan and schedule project activities and resources',
  },
  {
    question:
      'Which of the following is not a valid type of network relationship in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Finish-to-finish', value: false },
      { option: 'Start-to-start', value: false },
      { option: 'Start-to-finish', value: false },
      { option: 'All of the above are valid', value: true },
    ],
    correct_answer: 'All of the above are valid',
  },
  {
    question: 'In SAP PS, what is the purpose of the project status profile?',
    type: 'multiple_choice',
    options: [
      {
        option:
          'To define the project status in terms of system status and user status',
        value: true,
      },
      {
        option: 'To track project costs',
        value: false,
      },
      {
        option: 'To define the scope of the project',
        value: false,
      },
      {
        option: 'To identify the critical path of the project',
        value: false,
      },
    ],
    correct_answer:
      'To define the project status in terms of system status and user status',
  },
  {
    question: 'Which of the following is a valid project element in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'WBS element', value: true },
      { option: 'Network activity', value: true },
      { option: 'Milestone', value: true },
      { option: 'Work center', value: false },
    ],
    correct_answer: ['WBS element', 'Network activity', 'Milestone'],
  },
  {
    question: 'In SAP PS, what is the purpose of a material component?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To define the scope of the project',
        value: false,
      },
      {
        option: 'To identify the critical path of the project',
        value: false,
      },
      {
        option: 'To track project costs',
        value: false,
      },
      {
        option:
          'To manage the materials used in the project and track their consumption',
        value: true,
      },
    ],
    correct_answer:
      'To manage the materials used in the project and track their consumption',
  },
  {
    question: 'Which of the following is not a valid planning level in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Project level', value: false },
      { option: 'Network level', value: false },
      { option: 'Activity level', value: false },
      { option: 'Task level', value: true },
    ],
    correct_answer: 'Task level',
  },
  {
    question: 'In SAP PS, what is the purpose of a milestone trend analysis?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To track the progress of a project',
        value: false,
      },
      {
        option: 'To analyze the performance of the project team',
        value: false,
      },
      {
        option:
          'To identify potential delays or problems with project milestones',
        value: true,
      },
      {
        option: 'To estimate the cost of the project',
        value: false,
      },
    ],
    correct_answer:
      'To identify potential delays or problems with project milestones',
  },
  {
    question:
      'Which of the following is not a valid type of milestone in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Standard milestone', value: false },
      { option: 'Event milestone', value: false },
      { option: 'Key milestone', value: false },
      { option: 'All of the above are valid', value: true },
    ],
    correct_answer: 'All of the above are valid',
  },
  {
    question: 'In SAP PS, what is the purpose of the cost center hierarchy?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To group cost centers by location',
        value: false,
      },
      {
        option: 'To identify the cost center manager',
        value: false,
      },
      {
        option:
          'To provide a structure for organizing cost centers by function or responsibility',
        value: true,
      },
      {
        option: 'To track project costs',
        value: false,
      },
    ],
    correct_answer:
      'To provide a structure for organizing cost centers by function or responsibility',
  },
  {
    question: 'Which of the following is not a valid network type in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Internal network', value: false },
      { option: 'External network', value: true },
      { option: 'Maintenance network', value: false },
      { option: 'Project network', value: false },
    ],
    correct_answer: 'External network',
  },
  {
    question:
      'Which of the following is not a valid type of milestone billing plan in SAP PS?',
    type: 'multiple_choice',
    options: [
      { option: 'Percentage of completion', value: false },
      { option: 'Fixed price', value: false },
      { option: 'Event-based', value: false },
      { option: 'None of the above', value: true },
    ],
    correct_answer: 'None of the above',
  },
  {
    question: 'Which of the following is a valid object type in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Work center', value: false },
      { option: 'Activity element', value: true },
      { option: 'Milestone', value: true },
      { option: 'Cost center', value: false },
    ],
    correct_answer: ['Activity element', 'Milestone'],
  },
  {
    question:
      'Which of the following are valid network relationships in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Finish-to-start', value: true },
      { option: 'Start-to-start', value: true },
      { option: 'Finish-to-finish', value: true },
      { option: 'Start-to-finish', value: false },
    ],
    correct_answer: ['Finish-to-start', 'Start-to-start', 'Finish-to-finish'],
  },
  {
    question:
      'Which of the following are valid types of confirmations in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Time confirmation', value: true },
      { option: 'Material confirmation', value: true },
      { option: 'Expense confirmation', value: true },
      { option: 'Quantity confirmation', value: true },
    ],
    correct_answer: [
      'Time confirmation',
      'Material confirmation',
      'Expense confirmation',
      'Quantity confirmation',
    ],
  },
  {
    question:
      'Which of the following are valid types of resource-related billing in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Actual cost billing', value: false },
      { option: 'Resource billing', value: true },
      { option: 'Service billing', value: true },
      { option: 'None of the above', value: false },
    ],
    correct_answer: ['Resource billing', 'Service billing'],
  },
  {
    question: 'Which of the following are valid types of milestones in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Standard milestone', value: true },
      { option: 'Event milestone', value: true },
      { option: 'Key milestone', value: true },
      { option: 'Operational milestone', value: false },
    ],
    correct_answer: ['Standard milestone', 'Event milestone', 'Key milestone'],
  },
  {
    question: 'Which of the following are valid types of costs in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Direct costs', value: true },
      { option: 'Indirect costs', value: true },
      { option: 'Fixed costs', value: false },
      { option: 'Variable costs', value: false },
    ],
    correct_answer: ['Direct costs', 'Indirect costs'],
  },
  {
    question:
      'Which of the following are valid types of project management in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Project planning', value: true },
      { option: 'Project execution', value: true },
      { option: 'Project monitoring and controlling', value: true },
      { option: 'Project closing', value: true },
    ],
    correct_answer: [
      'Project planning',
      'Project execution',
      'Project monitoring and controlling',
      'Project closing',
    ],
  },
  {
    question:
      'Project milestones are used to track progress and monitor the completion of key deliverables in SAP PS.',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question: 'A network header is a planning level in SAP PS.',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'The cost center hierarchy in SAP PS is used to track project costs.',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: false,
      },
      {
        option: 'False',
        value: true,
      },
    ],
    correct_answer: false,
  },
  {
    question:
      'In SAP PS, a work center is used to define the resources required to carry out a specific operation or task.',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'A network activity in SAP PS is a sequence of tasks that must be completed in order to achieve a specific project goal.',
    type: 'true_false',
    options: [
      {
        option: 'True',
        value: true,
      },
      {
        option: 'False',
        value: false,
      },
    ],
    correct_answer: true,
  },
  {
    question:
      'Which of the following are valid types of resource assignments in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Individual assignment', value: true },
      { option: 'Team assignment', value: true },
      { option: 'Position assignment', value: true },
      { option: 'Const assignment', value: false },
    ],
    correct_answer: [
      'Individual assignment',
      'Team assignment',
      'Position assignment',
    ],
  },
  {
    question:
      'Which of the following are valid types of WBS elements in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Summary WBS element', value: true },
      { option: 'Network WBS element', value: true },
      { option: 'Operational WBS element', value: true },
      { option: 'Milestone WBS element', value: false },
    ],
    correct_answer: [
      'Summary WBS element',
      'Network WBS element',
      'Operational WBS element',
    ],
  },
  {
    question:
      'Which of the following are true about the WBS element in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'It is a required field for all project-related transactions.',
        value: true,
      },
      {
        option: 'It represents a single level in the project hierarchy.',
        value: false,
      },
      {
        option: 'It can be assigned to a network or an activity.',
        value: true,
      },
      { option: 'It can be used to control costs and budgets.', value: true },
    ],
    correct_answer: [
      'It is a required field for all project-related transactions.',
      'It can be assigned to a network or an activity.',
      'It can be used to control costs and budgets.',
    ],
  },
  {
    question:
      'Which of the following are true about network types in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      {
        option:
          'There are four network types: standard, milestone, WBS element, and summary.',
        value: false,
      },
      {
        option: 'A summary network cannot have a duration or dates.',
        value: true,
      },
      {
        option:
          'A milestone network can be used to represent a major event in the project.',
        value: true,
      },
      {
        option: 'A WBS element network is used to represent a work package.',
        value: true,
      },
    ],
    correct_answer: [
      'A summary network cannot have a duration or dates.',
      'A milestone network can be used to represent a major event in the project.',
      'A WBS element network is used to represent a work package.',
    ],
  },
  {
    question:
      'Which of the following are true about the project definition in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      {
        option:
          'It is used to group all project-related data and transactions.',
        value: true,
      },
      {
        option:
          'It can be created manually or automatically through integration with other modules.',
        value: true,
      },
      {
        option: 'It can be used to control access to the project data.',
        value: false,
      },
      {
        option: 'It is a required field for all project-related transactions.',
        value: true,
      },
    ],
    correct_answer: [
      'It is used to group all project-related data and transactions.',
      'It can be created manually or automatically through integration with other modules.',
      'It is a required field for all project-related transactions.',
    ],
  },
  {
    question:
      'Which of the following are true about the standard WBS element in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      { option: 'It can have a budget assigned to it.', value: true },
      {
        option: 'It can be assigned to a network or an activity.',
        value: false,
      },
      {
        option:
          'It can be used to represent a specific type of work in the project.',
        value: true,
      },
      { option: 'It cannot have its own sub-elements.', value: true },
    ],
    correct_answer: [
      'It can have a budget assigned to it.',
      'It can be used to represent a specific type of work in the project.',
      'It cannot have its own sub-elements.',
    ],
  },
  {
    question:
      'Which of the following are true about the billing plan in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      {
        option:
          'It is used to create invoices for the customer based on the project progress.',
        value: true,
      },
      {
        option: 'It can be assigned to a network or an activity.',
        value: false,
      },
      {
        option: 'It can be used to control revenue recognition in the project.',
        value: true,
      },
      {
        option: 'It can be set up with multiple payment milestones.',
        value: true,
      },
    ],
    correct_answer: [
      'It is used to create invoices for the customer based on the project progress.',
      'It can be used to control revenue recognition in the project.',
      'It can be set up with multiple payment milestones.',
    ],
  },
  {
    question:
      'Which of the following are true about the project builder in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'It is used to create and modify the project definition.',
        value: true,
      },
      {
        option: 'It allows the user to navigate through the project hierarchy.',
        value: true,
      },
      {
        option: 'It can be used to assign budgets to WBS elements.',
        value: true,
      },
      { option: 'It is a transaction code in SAP.', value: true },
    ],
    correct_answer: [
      'It is used to create and modify the project definition.',
      'It allows the user to navigate through the project hierarchy.',
      'It can be used to assign budgets to WBS elements.',
      'It is a transaction code in SAP.',
    ],
  },
  {
    question:
      'Which of the following fields are required to create a project definition in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Description', value: true },
      { option: 'Company code', value: false },
      { option: 'Project profile', value: true },
      { option: 'WBS element', value: false },
    ],
    correct_answer: ['Description', 'Project profile'],
  },
  {
    question:
      'Which of the following activities can be performed in the Project Builder transaction (transaction code CJ20N)?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Creating network activities', value: true },
      { option: 'Changing the status of a project', value: true },
      { option: 'Creating purchase orders', value: false },
      { option: 'Creating material reservations', value: false },
    ],
    correct_answer: [
      'Creating network activities',
      'Changing the status of a project',
    ],
  },
  {
    question:
      'Which of the following elements can be assigned a cost in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Work center', value: false },
      { option: 'Material', value: true },
      { option: 'Activity type', value: true },
      { option: 'Internal order', value: true },
    ],
    correct_answer: ['Material', 'Activity type', 'Internal order'],
  },
  {
    question:
      'Which of the following statements about milestones in SAP PS are true?',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'Milestones are always located at the beginning of a project',
        value: false,
      },
      {
        option: 'Milestones can be assigned to multiple WBS elements',
        value: true,
      },
      { option: 'Milestones can have a duration', value: true },
    ],
    correct_answer: [
      'Milestones can be assigned to multiple WBS elements',
      'Milestones can have a duration',
    ],
  },
  {
    question:
      'Which of the following elements are part of a project hierarchy in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'WBS element', value: true },
      { option: 'Network activity', value: true },
      { option: 'Milestone', value: true },
      { option: 'Cost center', value: false },
    ],
    correct_answer: ['WBS element', 'Network activity', 'Milestone'],
  },
  {
    question:
      'Which of the following transactions are used to create and maintain cost planning data in SAP PS?',
    type: 'multiple_right_answers',
    options: [
      { option: 'CJ40', value: true },
      { option: 'CJ20N', value: true },
      { option: 'CJ03', value: false },
      { option: 'CJ02', value: false },
    ],
    correct_answer: ['CJ40', 'CJ20N'],
  },
  {
    question:
      'Which of the following statements about project versions in SAP PS are true?',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'Project versions can be created for a specific time period',
        value: true,
      },
      {
        option: 'Project versions can be used to simulate changes in a project',
        value: true,
      },
      {
        option:
          'Project versions are automatically created when a project is created',
        value: false,
      },
    ],
    correct_answer: [
      'Project versions can be created for a specific time period',
      'Project versions can be used to simulate changes in a project',
    ],
  },
  {
    question:
      'Which of the following statements about confirmations in SAP PS are true?',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'Confirmations can be entered for network activities',
        value: true,
      },
      {
        option: 'Confirmations can only be entered for goods receipts',
        value: false,
      },
      {
        option:
          'Confirmations can be used to confirm actual work and materials consumed',
        value: true,
      },
    ],
    correct_answer: [
      'Confirmations can be entered for network activities',
      'Confirmations can be used to confirm actual work and materials consumed',
    ],
  },
  {
    question:
      'Which of the following are examples of project planning objects in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      { option: 'Network', value: true },
      { option: 'Activity', value: true },
      { option: 'WBS Element', value: true },
      { option: 'Material', value: false },
    ],
    correct_answer: ['Network', 'Activity', 'WBS Element'],
  },
  {
    type: 'multiple_choice',
    question:
      'Which of the following statements about project structures in SAP PS is true?',
    options: [
      {
        option: 'A project structure can only have one WBS element',
        value: false,
      },
      { option: 'A project structure can have multiple networks', value: true },
      {
        option: 'A project structure can have multiple company codes',
        value: false,
      },
      {
        option: 'A project structure can have multiple controlling areas',
        value: false,
      },
    ],
    correct_answer: 'A project structure can have multiple networks',
  },
  {
    type: 'true_false',
    question:
      'The primary purpose of SAP PS is to manage financial accounting tasks related to a project.',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    type: 'multiple_right_answers',
    question:
      'Which of the following are examples of cost planning methods in SAP PS? (Select all that apply)',
    options: [
      { option: 'Top-Down Planning', value: true },
      { option: 'Bottom-Up Planning', value: true },
      { option: 'Activity-Based Planning', value: false },
      { option: 'Result Analysis-Based Planning', value: false },
    ],
    correct_answer: ['Top-Down Planning', 'Bottom-Up Planning'],
  },
  {
    type: 'true_false',
    question:
      'A project definition in SAP PS can have multiple projects assigned to it.',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    type: 'multiple_choice',
    question:
      'Which of the following statements about project scheduling in SAP PS is true?',
    options: [
      {
        option: 'Project scheduling is only possible at the WBS element level',
        value: false,
      },
      {
        option: 'Project scheduling is only possible at the activity level',
        value: false,
      },
      {
        option:
          'Project scheduling is possible at both the WBS element and activity level',
        value: true,
      },
      { option: 'Project scheduling is not supported in SAP PS', value: false },
    ],
    correct_answer:
      'Project scheduling is possible at both the WBS element and activity level',
  },
  {
    type: 'multiple_right_answers',
    question:
      'Which of the following are examples of SAP PS reports? (Select all that apply)',
    options: [
      { option: 'Project Progress Report', value: true },
      { option: 'Cost Forecast Report', value: true },
      { option: 'Material Availability Report', value: false },
      { option: 'Resource Overload Report', value: false },
    ],
    correct_answer: ['Project Progress Report', 'Cost Forecast Report'],
  },
  {
    question: 'Cost center planning is not possible in SAP PS.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    type: 'multiple_choice',
    question:
      'Which of the following statements about project budgeting in SAP PS is true?',
    options: [
      {
        option: 'Budgeting is only possible at the project level',
        value: false,
      },
      {
        option: 'Budgeting is only possible at the WBS element level',
        value: false,
      },
      {
        option: 'Budgeting is only possible at the network level',
        value: false,
      },
      {
        option:
          'Budgeting is possible at both the project and WBS element level',
        value: true,
      },
    ],
    correct_answer:
      'Budgeting is possible at both the project and WBS element level',
  },
  {
    question:
      'The SAP PS module is used for managing and controlling complex projects.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'The SAP PS module can be integrated with other modules such as MM and FI.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'The SAP PS module only allows for the creation of project structures but not their execution.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'The SAP PS module does not support the creation of project budgets.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'The SAP PS module allows for the creation of project networks and activities.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'The SAP PS module does not allow for the creation of work breakdown structures (WBS).',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'The SAP PS module does not allow for the tracking of project costs.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'The SAP PS module does not allow for the creation of project teams and the assignment of team members to tasks.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'The SAP PS module does not support the integration of project schedules with external calendars.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: false,
  },
  {
    question:
      'The SAP PS module allows for the creation of project milestones and their tracking.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'Which of the following statements about SAP PS are true? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      { option: 'SAP PS stands for Project System', value: true },
      { option: 'SAP PS is a module within the SAP ERP system', value: true },
      {
        option: 'SAP PS is primarily used for finance and accounting tasks',
        value: false,
      },
      {
        option: 'SAP PS does not support multi-currency planning',
        value: false,
      },
    ],
    correct_answer: [
      'SAP PS stands for Project System',
      'SAP PS is a module within the SAP ERP system',
    ],
  },
  {
    question: 'Is it possible to integrate SAP PS with other SAP modules?',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
  },
  {
    question:
      'Which of the following is a correct statement about SAP PS networks?',
    type: 'multiple_choice',
    options: [
      {
        option:
          "Networks are used to model the project's activities and their dependencies",
        value: true,
      },
      {
        option: 'Networks are used to manage project costs and budgets',
        value: false,
      },
      {
        option:
          "Networks are used to define the project's organizational structure",
        value: false,
      },
      { option: 'Networks are not used in SAP PS', value: false },
    ],
    correct_answer:
      "Networks are used to model the project's activities and their dependencies",
  },
  {
    question: 'In SAP PS, what is a project definition?',
    type: 'multiple_choice',
    options: [
      {
        option:
          "A high-level description of the project's objectives and scope",
        value: true,
      },
      {
        option: "A detailed plan of the project's activities and resources",
        value: false,
      },
      { option: 'A list of project milestones and deliverables', value: false },
      { option: 'A list of project risks and issues', value: false },
    ],
    correct_answer:
      "A high-level description of the project's objectives and scope",
  },
  {
    question:
      'Which of the following are valid types of WBS elements in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      { option: 'Level 1', value: true },
      { option: 'Phase', value: true },
      { option: 'Activity', value: true },
      { option: 'Equipment', value: false },
    ],
    correct_answer: ['Level 1', 'Phase', 'Activity'],
  },
  {
    question:
      'Name the three components of which the SAP user strategy consists.',
    type: 'multiple_right_answers',
    options: [
      { option: 'NEW', value: true },
      { option: 'RENEW', value: true },
      { option: 'DELETE', value: false },
      { option: 'ENABLE', value: true },
    ],
    correct_answer: ['ENABLE', 'RENEW', 'NEW'],
  },
  {
    question: 'Which of the following is not a version type in cost planning?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Project version', value: true },
      { option: 'Controlling (CO) version', value: true },
      { option: 'Sales version', value: false },
      { option: 'Simulation version', value: true },
    ],
    correct_answer: [
      'Simulation version',
      'Controlling (CO) version',
      'Project version',
    ],
  },
  {
    question:
      'The valuation variant contains all information that controls the valuation of which of the following?',
    type: 'multiple_right_answers',
    options: [
      { option: 'External activities', value: true },
      { option: 'Material components', value: true },
      { option: 'BOM', value: false },
      { option: 'Equipment', value: false },
      { option: 'Internal activities/processes', value: true },
    ],
    correct_answer: [
      'Internal activities/processes',
      'Material components',
      'External activities',
    ],
  },
  {
    question:
      'For which of the following items can you determine planned costs?',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'Activity inputs for internally processed activities',
        value: true,
      },
      {
        option:
          'Primary costs for externally processed activities and services',
        value: true,
      },
      { option: 'Primary costs for work centers', value: false },
      { option: 'Primary costs for material components', value: true },
      { option: 'Primary costs for general cost activities', value: true },
    ],
    correct_answer: [
      'Primary costs for material components',
      'Primary costs for general cost activities',
      'Primary costs for externally processed activities and services',
      'Activity inputs for internally processed activities',
    ],
  },
  {
    question:
      'Which of the following factors should you consider when specifying the Appended and Apportioned indicators?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Order type', value: true },
      { option: 'Company code', value: true },
      { option: 'Controlling area', value: false },
      { option: 'Order category', value: true },
    ],
    correct_answer: ['Controlling area', 'Order type', 'Order category'],
  },
  {
    question:
      'For which of the following can you activate statistical key figures?',
    type: 'multiple_right_answers',
    options: [
      { option: 'Network activity elements', value: true },
      { option: 'WBS', value: true },
      { option: 'Milestones', value: false },
      { option: 'Components', value: false },
      { option: 'Networks', value: true },
    ],
    correct_answer: ['Networks', 'WBS', 'Network activity elements'],
  },
  {
    question:
      'What interfaces are available with cost planning in SAP S/4HANA?',
    type: 'multiple_right_answers',
    options: [
      { option: 'SAP Analysis for Microsoft Office', value: true },
      { option: 'MS Office', value: false },
      { option: 'Web Dynpro', value: true },
      { option: 'SAP S/4HANA', value: true },
    ],
    correct_answer: [
      'SAP S/4HANA',
      'Web Dynpro',
      'SAP Analysis for Microsoft Office',
    ],
  },
  {
    question: 'Which of the following can be assigned to activities?',
    type: 'multiple_right_answers',
    options: [
      { option: 'BOM', value: false },
      { option: 'Equipment', value: false },
      { option: 'Milestones', value: true },
      { option: 'Documents', value: true },
      { option: 'Material components', value: true },
    ],
    correct_answer: ['Milestones', 'Documents', 'Material components'],
  },
  {
    question: 'For what purposes can a company use WBS elements?',
    type: 'multiple_right_answers',
    options: [
      {
        option:
          'Perform period-end accounting processes, such as results analysis and settlement',
        value: true,
      },
      {
        option: 'Measure actual cost/dates versus plan from an aggregate level',
        value: true,
      },
      { option: 'Define equipment categories', value: true },
      { option: 'Monitor project progress', value: true },
      { option: 'Perform a configuration check', value: false },
    ],
    correct_answer: [
      'Monitor project progress',
      'Measure actual cost/dates versus plan from an aggregate level',
      'Perform period-end accounting processes, such as results analysis and settlement',
      'Define equipment categories',
    ],
  },
  {
    question: 'Is it possible to assign a material to a WBS element in SAP PS?',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: 'True',
  },
  {
    question: 'You can plan travel expenses using general cost activities.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: 'True',
  },
  {
    question: 'Cost planning using unit costing is period based.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: 'False',
  },
  {
    question:
      'Only a primary cost element can be assigned to the process master record.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: 'False',
  },
  {
    question:
      'You can change the costing sheet and overhead key in the activity-assigned header.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: 'False',
  },
  {
    question:
      'The transaction code for editing planning profiles is OKKT, and the transaction code for editing costing and valuation variants is OPSB.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: 'False',
  },
  {
    question:
      'You cannot define the controlling version for planning calculated values in Easy Cost Planning.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: 'False',
  },
  {
    question:
      'You can use the account assignment category in the purchase order to determine if the goods or invoice receipt is valued or if it gives rise to more planned costs.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: 'False',
  },
  {
    question:
      'The statistical key figure determines if planned costs are calculated for the activity.',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: true },
    ],
    correct_answer: 'True',
  },
  {
    question:
      'Project scheduling and cost element planning are independent of each other',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: 'True',
  },
  {
    question:
      'The SAP GUI is still available in SAP S/4HANA as an alternative navigation option.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: 'False',
  },
  {
    question:
      'Only one company can be linked to a single controlling area in project accounting.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: 'False',
  },
  {
    question: 'The SAP Fiori UX is only available for expert users?',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: 'False',
  },
  {
    question:
      'The long-term goal of the SAP UX strategy is to offer only major business and analytic applications on SAP S/4HANA with SAP Fiori as the unified UI.',
    type: 'true_false',
    options: [
      { option: 'True', value: false },
      { option: 'False', value: true },
    ],
    correct_answer: 'False',
  },
  {
    question:
      'Which of the following statements about SAP PS costs are true? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'SAP PS supports cost planning at the WBS element level',
        value: true,
      },
      {
        option: 'SAP PS allows you to allocate costs to different cost centers',
        value: true,
      },
      {
        option: 'SAP PS does not support cost controlling and monitoring',
        value: false,
      },
      {
        option: "SAP PS only supports planning costs in the project's currency",
        value: false,
      },
    ],
    correct_answer: ['SAP PS supports cost planning at the WBS element level'],
  },
  {
    question: 'What is the purpose of the Project Builder in SAP PS?',
    type: 'multiple_choice',
    options: [
      {
        option: 'To create project networks',
        value: false,
      },
      {
        option: 'To create and maintain project structures',
        value: true,
      },
      {
        option: 'To create and maintain project cost estimates',
        value: false,
      },
      {
        option: 'To create and maintain project schedules',
        value: false,
      },
    ],
    correct_answer: 'To create and maintain project structures',
  },
  {
    question:
      'Which of the following are examples of project progress analysis methods in SAP PS? (Select all that apply)',
    type: 'multiple_right_answers',
    options: [
      {
        option: 'Cost analysis',
        value: true,
      },
      {
        option: 'Resource analysis',
        value: true,
      },
      {
        option: 'Schedule analysis',
        value: true,
      },
      {
        option: 'Quality analysis',
        value: false,
      },
    ],
    correct_answers: [
      'Cost analysis',
      'Resource analysis',
      'Schedule analysis',
    ],
  },
  {
    question:
      'In SAP PS, which type of activity can be performed in parallel with other activities?',
    type: 'multiple_choice',
    options: [
      {
        option: 'Finish-to-start activity',
        value: false,
      },
      {
        option: 'Start-to-start activity',
        value: true,
      },
      {
        option: 'Finish-to-finish activity',
        value: false,
      },
      {
        option: 'Start-to-finish activity',
        value: false,
      },
    ],
    correct_answer: 'Start-to-start activity',
  },
  {
    question: "What is the purpose of the 'project definition' in SAP PS?",
    type: 'multiple_choice',
    options: [
      {
        option: 'To define a set of activities that are commonly used',
        value: false,
      },
      { option: 'To define a network with only one activity', value: false },
      { option: 'To define a network with no activities', value: false },
      {
        option:
          'To define a framework for a project with specific objectives and requirements',
        value: true,
      },
    ],
    correct_answer:
      'To define a framework for a project with specific objectives and requirements',
  },
  {
    question: "What is the purpose of the 'standard network' in SAP PS?",
    type: 'multiple_choice',
    options: [
      { option: 'To define a sequence of activities', value: false },
      {
        option: 'To define a set of activities that are commonly used',
        value: true,
      },
      { option: 'To define a network with only one activity', value: false },
      { option: 'To define a network with no activities', value: false },
    ],
    correct_answer: 'To define a set of activities that are commonly used',
  },
  {
    question: "What is the purpose of the 'milestone' in SAP PS?",
    type: 'multiple_choice',
    options: [
      { option: 'To track the start date of an activity', value: false },
      { option: 'To track the finish date of an activity', value: false },
      {
        option: 'To track progress and completion of a project phase',
        value: true,
      },
      { option: 'To track resources assigned to a project', value: false },
    ],
    correct_answer: 'To track progress and completion of a project phase',
  },
  {
    question: "What is the purpose of the 'milestone' in SAP PS?",
    type: 'multiple_choice',
    options: [
      { option: 'To track the start date of an activity', value: false },
      { option: 'To track the finish date of an activity', value: false },
      {
        option: 'To track progress and completion of a project phase',
        value: true,
      },
      { option: 'To track resources assigned to a project', value: false },
    ],
    correct_answer: 'To track progress and completion of a project phase',
  },
];
