// ============================================================
// SYMPOSIUM CONFIGURATION FILE
// ============================================================
// Edit ALL symposium details here. Changes reflect site-wide.
// ============================================================

export const symposiumConfig = {
  // ── General ──────────────────────────────────────────────
  name: "TECHNOVANZA 2026",
  tagline: "Ignite Your Code. Unleash Your Creativity.",
  date: "March 28, 2026",
  venue: "AC Conference Hall(CSE Department), AAMEC Campus",
  collegeName: "Anjalai Ammal Mahalingam Engineering College",
  departmentName: "Department of Computer Science and Engineering",

  // ── Registration ─────────────────────────────────────────
  // Replace with your actual Google Form link
  googleFormLink: "https://techtml.onrender.com/",

  // ── HOD Details ──────────────────────────────────────────
  principal: {
    name: "Dr. S.N. Ramaswamy",
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
    name: "Niveesh      || Madhavan  || Naveen ",
    phone: "   8637689191 || 9600496137 || 9042845757 ",
    email: "technovanzacse26@gmail.com",
  },

  // ── Events ───────────────────────────────────────────────
  technicalEvents: [
    {
      title: "🧪Debugging",
      description:
        "Find and fix bugs in the given code within the time limit. Test your problem-solving skills and attention to detail.",
      type: "Individual" as const,
      teamSize: null,
      limit: 30,
      rules: [
        "Duration: 40 mins | Single Round | Individual",
        "Sections:",
        "Section A (20 mins): 20 MCQs (C, Python, Java)",
        "Section B (20 mins): 10 Debugging problems solved on any one intrested language (C or Java or Python)",
        "Evaluation: Points scored + Time taken",
      ],
      organizers: [
        { name: "M.Madhavan", phone: "9600496137" },
        { name: "RR.Pragadeeshwari", phone: "6382022459" },
      ],
    },
    {
      title: "Prompt Engineering",
      description:
        "Craft the perfect prompts to get AI models to produce the desired output. A battle of creativity and precision.",
      type: "Individual" as const,
      teamSize: null,
      limit: 30,
      rules: [
        "Build a website using prompts only, matching given requirements",
        "Individual event, no teamwork",
        "Use prompts only",
        "Complete within time limit",
      ],
      organizers: [
        { name: "S.Mohamed Saif", phone: "8825641661" },
        { name: "J.Fajila Begam", phone: "8072043845" },
      ],
    },
    {
      title: "Coding Contest",
      description:
        " Code your ideas into reality and turn creativity into innovation.",
      type: "Individual" as const,
      teamSize: null,
      limit: 30,
      rules: [
        "Structure:",
        "Round 1 (1 hr): 20 MCQs (C, Python, Java)",
        "Round 2 (1 hr): 5 Programming problems (provide description for given problem code)",
       
      ],
      organizers: [
        { name: "S.Vignesh", phone: "8124234995" },
        { name: "SU.Harshini", phone: "9025454462" },
      ],
    },
    {
      title: "Ideathon",
      description:
        "Present innovative tech solutions to real-world problems. Pitch your idea to a judges.",
      type: "Team" as const,
      teamSize: 2,
      limit: 30,
      rules: [
        "Team size: 2 members",
        "10-minute presentation +  Q&A asked by judges",
        "Domain-based topic",
        " Own innovative idea",
        "Smart Campus Solutions",
        "IEEE paper presentation",
        "Slide deck: 10+ slides (no name/thank you slides)",
      ],
      organizers: [
        { name: "Lekaa AV", phone: "9842154992" },
        { name: "Sreenithe V", phone: "73392 37158" },
      ],
    },
  ],

  nonTechnicalEvents: [
    {
      title: "Rapid Rush",
      description:
        " Intresting Games With Happiness",
      type: "Team" as const,
      teamSize: 2,
      limit: 30,
      rules: [
        "(TeamSize:2)Round 1:",
        "8 games — each game has a 2-minute time limit",
        "At the end of Round 1, 6 teams will be selected based on points and time.",
        "Round 2 (Final):",
        "2 games",
        "Scores based on finishing time",
      ],
      organizers: [
        { name: "S.Suman Sai Kumar", phone: "7639143068" },
        { name: "A.Harini", phone: "6374186025" },
      ],
    },
    {
      title: "Photography",
      description:
        "Participants submit their best photo online. The best edited photos in Round 2 decide the winners!",
      type: "Individual" as const,
      teamSize: null,
      limit: 30,
      rules: [
        "Team Size: Individual",
        "Only one photo submission per participant",
        "Submit only via the given Gmail ID",
        "Any topic allowed",
        " Late submissions will not be accepted",
        "In Round 2, only basic edits allowed — no AI",
        "Editing will be done on the received photo",
        "The 3 winning photos will not be revealed to avoid conflicts among participants",
      ],
      organizers: [
        { name: "S.Mugilan", phone: "9791504046" },
        { name: "M.Dooriga", phone: "8838585876" },
      ],
    },
    {
      title: "Chess",
      description:
        "A classic battle of minds. Compete in a knockout chess tournament and claim the title of champion.",
      type: "Individual" as const,
      teamSize: null,
      limit: 30,
      rules: [
        "Teamwork is not allowed",
        "Players alternate moves one at a time. White always moves first, providing a slight initial initiative.",
        "Rapid/Blitz: Fast-paced games (typically 3 to 15 minutes).",
        "giveing points to each pieces",
      ],
      organizers: [
        { name: "KK MoreshRam", phone: "8667270186" },
        { name: "Kaviyaa", phone: "6383753116" },
      ],
    },
    {
      title: "Meme Creation",
      description:
        "Create a meme on the spot within the time limit",
      type: "Individual" as const,
      teamSize: null,
      limit: 30,
      rules: [
        "Use Google for raw images",
        "30 minutes to create memes",
        "Use photo editor, no AI",
        "One meme only",
        "Judged on creativity, innovation, humour, and sarcasm",
      ],
      organizers: [
        { name: "S.Mohamed Anwar", phone: "8072022294" },
        { name: "V.Mahalakshmi", phone: "9940929353" },
      ],
    },
  ],
};

export type EventType = (typeof symposiumConfig.technicalEvents)[number];
