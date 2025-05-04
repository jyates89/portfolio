import { Timeline } from 'app/components/timeline';

export const metadata = {
  title: 'Career',
  description: 'A history of my career and a description of my responsibilities.',
};

const careerTimeline = [
  {
    title: 'Senior Software Developer',
    company: 'INVIDI Technologies',
    startDate: 'June 2022',
    endDate: 'Present',
    location: 'Princeton, NJ | Hybrid',
    description: [
      'Managing multi-region Kubernetes clusters in AWS and GCP.',
      'Developed Java microservices for AWS and GCP deployments, collaborating with product owners for streamlined processes.',
      'Mentored new hires through onboarding and pair programming, reducing ramp-up time by 50%.',
      'Instituted real-time performance dashboards, significantly reducing outage response times.',
    ],
    logo: '/logos/invidi.svg',
  },
  {
    title: 'Software Developer',
    company: 'INVIDI Technologies',
    startDate: 'Jan 2017',
    endDate: 'June 2022',
    location: 'Newtown, PA | Hybrid',
    description: [
      'Engineered and deployed Java and C/C++ applications globally, reducing latency for end-users worldwide.',
      'Implemented new version control procedures, decreasing post-release issues and transitioning to an agile cloud framework.',
      'Presented learning sessions to promote knowledge sharing and to foster innovation within development teams.',
    ],
    logo: '/logos/invidi.svg',
  },
  {
    title: 'Associate Software Developer',
    company: 'INVIDI Technologies',
    startDate: 'Nov 2015',
    endDate: 'Dec 2016',
    location: 'Newtown, PA | On-site',
    description: [
      'Identified and fixed bugs in C/C++ codebases using GDB, reducing system crashes.',
      'Developed emulation tools for comprehensive testing, saving on hardware purchases.',
    ],
    logo: '/logos/invidi.svg',
  },
];

export default function CareerPage() {
  return (
    <section className="w-full">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Career Timeline</h1>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10">
        A chronological overview of my professional journey and key achievements.
      </p>
      <Timeline items={careerTimeline} />
    </section>
  );
}
