export const dummyTasks: Task[] = [
  {
    id: "1",
    user: {
      id: "123",
      name: "John Doe",
      avatar: undefined,
    },
    content: "Provide temporary housing for displaced families.",
    metadata: {
      volunteersRequired: 5,
      volunteersAssigned: 3,
      applicants: ["user1", "user2", "user3"],
      status: "open",
      urgent: true,
      category: "housing",
      startDate: new Date("2025-01-12"),
      endDate: new Date("2025-01-15"),
    },
  },
  {
    id: "2",
    user: {
      id: "124",
      name: "Jane Smith",
      avatar: undefined,
    },
    content: "Distribute food and water to affected areas.",
    metadata: {
      volunteersRequired: 10,
      volunteersAssigned: 7,
      applicants: ["user4", "user5"],
      status: "in_progress",
      urgent: false,
      category: "foodAndWater",
      startDate: new Date("2025-01-13"),
      endDate: new Date("2025-01-17"),
    },
  },
  {
    id: "3",
    user: {
      id: "125",
      name: "Alex Johnson",
      avatar: undefined,
    },
    content: "Collect donations for relief efforts.",
    metadata: {
      volunteersRequired: 3,
      volunteersAssigned: 2,
      applicants: [],
      status: "open",
      urgent: false,
      category: "donations",
      startDate: new Date("2025-01-14"),
      endDate: new Date("2025-01-20"),
    },
  },
  {
    id: "4",
    user: {
      id: "123",
      name: "John Doe",
      avatar: undefined,
    },
    content: "Assist with pet rescue operations.",
    metadata: {
      volunteersRequired: 4,
      volunteersAssigned: 1,
      applicants: ["user6"],
      status: "open",
      urgent: true,
      category: "petRescueAndCare",
      startDate: new Date("2025-01-15"),
      endDate: new Date("2025-01-18"),
    },
  },
  {
    id: "5",
    user: {
      id: "124",
      name: "Jane Smith",
      avatar: undefined,
    },
    content: "Help clean up debris in affected neighborhoods.",
    metadata: {
      volunteersRequired: 6,
      volunteersAssigned: 3,
      applicants: ["user7", "user8", "user9"],
      status: "in_progress",
      urgent: false,
      category: "cleanupAndRepairs",
      startDate: new Date("2025-01-16"),
      endDate: new Date("2025-01-22"),
    },
  },
  {
    id: "6",
    user: {
      id: "125",
      name: "Alex Johnson",
      avatar: undefined,
    },
    content: "Provide legal assistance for disaster-related claims.",
    metadata: {
      volunteersRequired: 2,
      volunteersAssigned: 1,
      applicants: ["user10"],
      status: "open",
      urgent: true,
      category: "legalAssistance",
      startDate: new Date("2025-01-17"),
      endDate: new Date("2025-01-19"),
    },
  },
  {
    id: "7",
    user: {
      id: "123",
      name: "John Doe",
      avatar: undefined,
    },
    content: "Set up WiFi and communication hubs.",
    metadata: {
      volunteersRequired: 5,
      volunteersAssigned: 4,
      applicants: ["user11"],
      status: "completed",
      urgent: false,
      category: "communicationToolsAndDevices",
      startDate: new Date("2025-01-10"),
      endDate: new Date("2025-01-11"),
    },
  },
  {
    id: "8",
    user: {
      id: "124",
      name: "Jane Smith",
      avatar: undefined,
    },
    content: "Offer counseling sessions for disaster survivors.",
    metadata: {
      volunteersRequired: 3,
      volunteersAssigned: 3,
      applicants: ["user12", "user13"],
      status: "in_progress",
      urgent: true,
      category: "counselingAndEmotionalSupport",
      startDate: new Date("2025-01-20"),
      endDate: new Date("2025-01-25"),
    },
  },
  {
    id: "9",
    user: {
      id: "125",
      name: "Alex Johnson",
      avatar: undefined,
    },
    content: "Donate and distribute blankets and tents.",
    metadata: {
      volunteersRequired: 6,
      volunteersAssigned: 2,
      applicants: ["user14", "user15"],
      status: "open",
      urgent: false,
      category: "shelterSupplies",
      startDate: new Date("2025-01-22"),
      endDate: new Date("2025-01-28"),
    },
  },
  {
    id: "10",
    user: {
      id: "123",
      name: "John Doe",
      avatar: undefined,
    },
    content: "Transport generators to shelters.",
    metadata: {
      volunteersRequired: 3,
      volunteersAssigned: 2,
      applicants: ["user16"],
      status: "open",
      urgent: true,
      category: "generatorsAndPowerSupplies",
      startDate: new Date("2025-01-23"),
      endDate: new Date("2025-01-24"),
    },
  },
  {
    id: "11",
    user: {
      id: "124",
      name: "Jane Smith",
      avatar: undefined,
    },
    content: "Organize a lost and found operation for people and pets.",
    metadata: {
      volunteersRequired: 4,
      volunteersAssigned: 3,
      applicants: ["user17", "user18"],
      status: "completed",
      urgent: false,
      category: "lostAndFound",
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-01-05"),
    },
  },
  {
    id: "12",
    user: {
      id: "125",
      name: "Alex Johnson",
      avatar: undefined,
    },
    content: "Relocate families to safer zones.",
    metadata: {
      volunteersRequired: 8,
      volunteersAssigned: 5,
      applicants: ["user19", "user20"],
      status: "in_progress",
      urgent: true,
      category: "relocationAssistance",
      startDate: new Date("2025-01-12"),
      endDate: new Date("2025-01-14"),
    },
  },
  {
    id: "13",
    user: {
      id: "123",
      name: "John Doe",
      avatar: undefined,
    },
    content: "Repair damaged homes and infrastructure.",
    metadata: {
      volunteersRequired: 7,
      volunteersAssigned: 3,
      applicants: ["user21"],
      status: "open",
      urgent: false,
      category: "cleanupAndRepairs",
      startDate: new Date("2025-01-15"),
      endDate: new Date("2025-01-22"),
    },
  },
  {
    id: "14",
    user: {
      id: "124",
      name: "Jane Smith",
      avatar: undefined,
    },
    content: "Transport families to emergency shelters.",
    metadata: {
      volunteersRequired: 10,
      volunteersAssigned: 6,
      applicants: ["user22", "user23"],
      status: "in_progress",
      urgent: true,
      category: "transportation",
      startDate: new Date("2025-01-16"),
      endDate: new Date("2025-01-20"),
    },
  },
  {
    id: "15",
    user: {
      id: "125",
      name: "Alex Johnson",
      avatar: undefined,
    },
    content: "Provide childcare services for displaced families.",
    metadata: {
      volunteersRequired: 4,
      volunteersAssigned: 2,
      applicants: ["user24", "user25"],
      status: "open",
      urgent: false,
      category: "childcare",
      startDate: new Date("2025-01-18"),
      endDate: new Date("2025-01-25"),
    },
  },
];
