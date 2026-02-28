// ============================================================
// SYMPOSIUM CONFIGURATION FILE
// ============================================================
// Edit ALL symposium details here. Changes reflect site-wide.
// ============================================================

export const symposiumConfig = {
  // ── General ──────────────────────────────────────────────
  name: "CSE SYMPOSIUM 2026",
  tagline: "Ignite Your Code. Unleash Your Creativity.",
  date: "August 15, 2026",
  venue: "Main Seminar Hall, AAMEC Campus",
  collegeName: "Anjalai Ammal Mahalingam Engineering College",
  departmentName: "Department of Computer Science and Engineering",

  // ── Registration ─────────────────────────────────────────
  // Replace with your actual Google Form link
  googleFormLink: "https://forms.google.com/your-form-link",

  // ── HOD Details ──────────────────────────────────────────
  principal: {
    name: "Dr. S.N. Ramasamy",
    title: "Principal",
  },

  hod: {
    name: "Dr. K. Velmurugan ME, MBA, Ph.D.",
    title: "Professor & Head, Department of CSE",
    message:
      "Welcome to CSE Symposium 2026! This event is a platform for students to showcase their technical prowess and creative thinking. I encourage every student to participate and make the most of this opportunity.",
  },

  // ── Footer / Main Organizer ──────────────────────────────
  mainOrganizer: {
    name: "Mr. S. Ramesh",
    phone: "+91 98765 43210",
    email: "csesymposium@aamec.edu.in",
  },

  // ── Events ───────────────────────────────────────────────
  technicalEvents: [
    {
      title: "Debugging",
      description:
        "Find and fix bugs in the given code within the time limit. Test your problem-solving skills and attention to detail.",
      type: "Individual" as const,
      teamSize: null,
      limit: 50,
      rules: [
        "Time limit: 45 minutes",
        "Languages: C, C++, Java, Python",
        "No internet access allowed",
        "Judging based on accuracy and speed",
      ],
      organizers: [
        { name: "Arun Kumar", phone: "+91 90000 00001" },
        { name: "Priya Sharma", phone: "+91 90000 00002" },
      ],
    },
    {
      title: "Prompt Engineering",
      description:
        "Craft the perfect prompts to get AI models to produce the desired output. A battle of creativity and precision.",
      type: "Individual" as const,
      teamSize: null,
      limit: 40,
      rules: [
        "3 rounds of increasing difficulty",
        "Judged on output accuracy and creativity",
        "AI tools will be provided",
        "No pre-written prompts allowed",
      ],
      organizers: [
        { name: "Deepak Raj", phone: "+91 90000 00003" },
        { name: "Swetha M", phone: "+91 90000 00004" },
      ],
    },
    {
      title: "Coding Quiz",
      description:
        "A rapid-fire quiz covering programming concepts, data structures, algorithms, and general CS knowledge.",
      type: "Individual" as const,
      teamSize: null,
      limit: 60,
      rules: [
        "30 questions in 20 minutes",
        "Multiple choice and fill-in-the-blank",
        "Negative marking applies",
        "Topics: DSA, OS, DBMS, Networks",
      ],
      organizers: [
        { name: "Karthik S", phone: "+91 90000 00005" },
        { name: "Divya R", phone: "+91 90000 00006" },
      ],
    },
    {
      title: "Ideathon",
      description:
        "Present innovative tech solutions to real-world problems. Pitch your idea and prototype to a panel of judges.",
      type: "Team" as const,
      teamSize: 4,
      limit: 20,
      rules: [
        "Team of up to 4 members",
        "10-minute presentation + 5 min Q&A",
        "PPT and prototype required",
        "Judged on innovation, feasibility, and presentation",
      ],
      organizers: [
        { name: "Vishnu P", phone: "+91 90000 00007" },
        { name: "Anitha K", phone: "+91 90000 00008" },
      ],
    },
  ],

  nonTechnicalEvents: [
    {
      title: "Rapid Rush",
      description:
        "A high-energy relay of fun challenges — speed, strategy, and teamwork collide in this thrilling race!",
      type: "Team" as const,
      teamSize: 3,
      limit: 30,
      rules: [
        "Team of 3 members",
        "Multiple mini-game rounds",
        "Fastest team wins",
        "All team members must participate in every round",
      ],
      organizers: [
        { name: "Ravi M", phone: "+91 90000 00009" },
        { name: "Lakshmi S", phone: "+91 90000 00010" },
      ],
    },
    {
      title: "Photography",
      description:
        "Capture the essence of the symposium through your lens. Theme will be revealed on the event day.",
      type: "Individual" as const,
      teamSize: null,
      limit: 40,
      rules: [
        "Mobile or DSLR allowed",
        "No pre-shot images",
        "Basic editing allowed (no heavy manipulation)",
        "Submit top 3 photos",
      ],
      organizers: [
        { name: "Naveen R", phone: "+91 90000 00011" },
        { name: "Meera K", phone: "+91 90000 00012" },
      ],
    },
    {
      title: "Chess",
      description:
        "A classic battle of minds. Compete in a knockout chess tournament and claim the title of champion.",
      type: "Individual" as const,
      teamSize: null,
      limit: 32,
      rules: [
        "Knockout format",
        "10-minute rapid games",
        "Standard chess rules apply",
        "Touch-move rule enforced",
      ],
      organizers: [
        { name: "Suresh V", phone: "+91 90000 00013" },
        { name: "Kavitha J", phone: "+91 90000 00014" },
      ],
    },
    {
      title: "Meme Creation",
      description:
        "Turn your humor into art! Create the funniest and most relatable memes on the spot.",
      type: "Individual" as const,
      teamSize: null,
      limit: 50,
      rules: [
        "Topic given on the spot",
        "30 minutes to create memes",
        "No offensive or inappropriate content",
        "Submit 3 memes for judging",
      ],
      organizers: [
        { name: "Ajay D", phone: "+91 90000 00015" },
        { name: "Nisha P", phone: "+91 90000 00016" },
      ],
    },
  ],
};

export type EventType = (typeof symposiumConfig.technicalEvents)[number];
