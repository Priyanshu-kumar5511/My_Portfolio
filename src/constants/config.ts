type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    education: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Priyanshu ",
    fullName: "Priyanshu ",
    email: "princepriyanshu5511@mail.com",
  },
  hero: {
    name: "Priyanshu ",
    p: ["I develop Full-Stack applications, user interfaces, and dynamic web experiences."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Hi! I’m Priyanshu Kumar, a passionate Frontend & Full-Stack Developer currently pursuing my MCA at Lovely Professional University. 🎓 I love creating beautiful and functional web experiences and have hands-on skills as a Frontend Developer, along with PHP, MySQL, CodeIgniter, C, C++, and Java. I’m also comfortable with Git, Figma, Canva, and enjoy solving problems, learning new things, and building cool projects that make an impact.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    
    education: {
      p: "My academic journey",
  h2: "Education.",
    },

    feedbacks: {
      p: "Verified skills & courses",
  h2: "Certificates.",
    },
    
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
