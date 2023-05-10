export default [
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
    question: 'Is it possible to assign a material to a WBS element in SAP PS?',
    type: 'true_false',
    options: [
      { option: 'True', value: true },
      { option: 'False', value: false },
    ],
    correct_answer: true,
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
];
