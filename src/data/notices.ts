export interface Notice {
  id: string
  title: string
  content: string
  category: string
  priority: "urgent" | "high" | "normal" | "low"
  type: "general" | "academic" | "administrative" | "examination" | "event" | "holiday" | "recruitment" | "result"
  author: string
  authorRole: string
  department: string
  publishDate: string
  expiryDate?: string
  status: "active" | "expired" | "draft"
  attachments: {
    name: string
    type: string
    size: string
    url: string
  }[]
  tags: string[]
  views: number
  likes: number
  comments: number
  bookmarks: number
  featured: boolean
  pinned: boolean
  readBy: number
  targetAudience: string[]
}

export const notices: Notice[] = [
  {
    id: "1",
    title: "Annual MBBS Final Professional Examination Schedule - 2024",
    content: "The Annual MBBS Final Professional Examination for the academic year 2024 will commence from 15th May 2024. All final year students are requested to complete their form fill-up by 30th April 2024. Detailed examination schedule and venue information are attached with this notice.",
    category: "Examination",
    priority: "urgent",
    type: "examination",
    author: "Prof. Dr. A. K. M. Fazlul Haque",
    authorRole: "Controller of Examinations",
    department: "Examination Control",
    publishDate: "2024-03-15",
    expiryDate: "2024-05-01",
    status: "active",
    attachments: [
      {
        name: "MBBS_Final_Exam_Schedule_2024.pdf",
        type: "PDF",
        size: "2.3 MB",
        url: "#"
      },
      {
        name: "Exam_Guidelines_2024.pdf",
        type: "PDF",
        size: "1.2 MB",
        url: "#"
      }
    ],
    tags: ["examination", "final-professional", "mbbs", "schedule", "urgent"],
    views: 1250,
    likes: 45,
    comments: 12,
    bookmarks: 89,
    featured: true,
    pinned: true,
    readBy: 245,
    targetAudience: ["Final Year Students", "Faculty Members", "Department Heads"]
  },
  {
    id: "2",
    title: "International Medical Conference 2024 - Call for Papers",
    content: "Rangpur Community Medical College is organizing the International Medical Conference 2024 on 'Innovations in Medical Education and Healthcare Delivery'. Researchers and medical professionals are invited to submit their abstracts for presentation. Last date for submission: 30th April 2024.",
    category: "Event",
    priority: "high",
    type: "event",
    author: "Dr. Sarah Johnson",
    authorRole: "Conference Secretary",
    department: "Medical Education Unit",
    publishDate: "2024-03-10",
    expiryDate: "2024-04-30",
    status: "active",
    attachments: [
      {
        name: "Conference_Brochure_2024.pdf",
        type: "PDF",
        size: "5.6 MB",
        url: "#"
      },
      {
        name: "Abstract_Submission_Form.docx",
        type: "Document",
        size: "156 KB",
        url: "#"
      }
    ],
    tags: ["conference", "call-for-papers", "medical-education", "healthcare", "international"],
    views: 890,
    likes: 67,
    comments: 23,
    bookmarks: 123,
    featured: true,
    pinned: false,
    readBy: 178,
    targetAudience: ["Faculty Members", "Researchers", "Students", "Medical Professionals"]
  },
  {
    id: "3",
    title: "Library Hours Extended During Examination Period",
    content: "To facilitate better preparation for upcoming examinations, the college library will remain open from 8:00 AM to 10:00 PM daily until 31st May 2024. All students are requested to make use of this extended facility for their study and research needs.",
    category: "Academic",
    priority: "normal",
    type: "academic",
    author: "Mr. Muhammad Ali",
    authorRole: "Librarian",
    department: "Library",
    publishDate: "2024-03-12",
    expiryDate: "2024-05-31",
    status: "active",
    attachments: [],
    tags: ["library", "extended-hours", "examination", "study-facility"],
    views: 567,
    likes: 34,
    comments: 8,
    bookmarks: 45,
    featured: false,
    pinned: false,
    readBy: 156,
    targetAudience: ["All Students", "Faculty Members"]
  },
  {
    id: "4",
    title: "Holiday Notice: Independence Day 2024",
    content: "The college will remain closed on 26th March 2024 on the occasion of Independence Day. Normal academic activities will resume from 27th March 2024. All departments and offices are requested to display the national flag prominently on their premises.",
    category: "Holiday",
    priority: "normal",
    type: "holiday",
    author: "Admin Office",
    authorRole: "Administrative Officer",
    department: "Administration",
    publishDate: "2024-03-20",
    expiryDate: "2024-03-26",
    status: "active",
    attachments: [],
    tags: ["holiday", "independence-day", "26-march", "national-holiday"],
    views: 1234,
    likes: 78,
    comments: 15,
    bookmarks: 67,
    featured: false,
    pinned: false,
    readBy: 456,
    targetAudience: ["All Students", "Faculty Members", "Staff", "Employees"]
  },
  {
    id: "5",
    title: "Faculty Recruitment - Assistant Professor positions available",
    content: "Applications are invited from qualified candidates for Assistant Professor positions in the departments of Anatomy, Physiology, and Biochemistry. Minimum qualifications: MBBS, FCPS/MD/MS in relevant discipline with 3 years teaching experience. Last date for application: 15th April 2024.",
    category: "Recruitment",
    priority: "high",
    type: "recruitment",
    author: "HR Department",
    authorRole: "HR Manager",
    department: "Human Resources",
    publishDate: "2024-03-08",
    expiryDate: "2024-04-15",
    status: "active",
    attachments: [
      {
        name: "Job_Application_Form.pdf",
        type: "PDF",
        size: "234 KB",
        url: "#"
      },
      {
        name: "Recruitment_Guidelines.pdf",
        type: "PDF",
        size: "456 KB",
        url: "#"
      }
    ],
    tags: ["recruitment", "faculty", "assistant-professor", "anatomy", "physiology", "biochemistry"],
    views: 789,
    likes: 23,
    comments: 34,
    bookmarks: 89,
    featured: false,
    pinned: false,
    readBy: 234,
    targetAudience: ["Job Seekers", "Medical Professionals", "Academicians"]
  }
]
