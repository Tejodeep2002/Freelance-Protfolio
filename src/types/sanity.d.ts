interface getInfo {
  name: string;
  age: number;
  born: string;
  bio: string;
  subtitle: string;
  phone: string;
  mail: string;
  profilePic: string;
  experienceYears: string;
  projectDone: string;
  contactUsDesc: String;
  location: String;
}

interface getExperience extends experience {}
interface getSocialLinks extends socialLinks {}
interface getProjects extends projects {}
interface getServices extends services {}
interface getTestimonial extends testimonial {}
interface getSkills {
  id: number;
  name: string;
  technologies: {
    _key: string;
    _type: string;
    name: string;
    logo: string;
  }[];
}
