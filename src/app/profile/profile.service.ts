import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'City Management System',
      desc: '',
      imgUrl: 'assets/images/hrms.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Ecommerce Management System',
      desc: '',
      imgUrl: 'assets/images/srk_one.png',
      tech: 'Angular, Node, MongoDB, Express, Java'
    },


    {
      id: 3,
      title: 'Employee Management System',
      desc: '',
      imgUrl: 'assets/images/cims.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },
  ]
  about2 = `Experienced software developer with through experience in designing of web application and frontend module with respect to generalization and re-usability of code. I am currently seeking a part time job where I can apply my skills and knowledge for continuous improvement`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'AngularJS ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NodeJS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JavaScript TypeScript',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL MYSQL',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '50%'
    },
    {
      'id': '6',
      'skill': 'JAVA',
      'progress': '50%'
    },
    {
      'id': '7',
      'skill': 'HTML5 CSS Bootstrap',
      'progress': '90%'
    }

  ];


  educationData: any = [
        {
      'id': '1',
      'from_to_year': '2023 - Present',
      'education': 'Post Graduate Certificate',
      'stream': 'Web Development',
      'institution': 'Conestoga, Waterloo'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2017',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Technology',
      'info': `Completed B.Tech in Computer Engineering with 8.16 CGPA`,
      'institution': 'Uka Tarsadia University, Bardoli'
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'SCIKEY',
      location: 'Surat',
      timeline: 'June 2017 to February 2021',
      role: 'Associate Software Developer',
      work: `Technology: Angular7, Nodejs(Express), HTML, SCSS, Bootstrap, JavaScript, TypeScript .
      Designed and Developed 4 projects consisting of different technologies like Angular, NodeJS and Mongodb .
      Created infrastructure in Angular consisting of promises and callbacks .
      Implemented multiple UI/UX in Angular with different UI libraries .
      Experience on different module domains like Financing, Diamond Ecommerce and many more
`

    },
    {
      id: 3,
      company: 'Project Tree',
      location: 'Surat',
      timeline: 'March 2021 to December 2021',
      role: 'Software Engineer',
      work: `Technology: Angular12, HTML, SCSS, JavaScript , Bootstrap, JIRA .
      Implemented multiple webapps as Frontend Developer mainly in Angular12 .
      Developed Admin Panel with Role based authentication .
      Developed multiple UI/UX components according to customer’s requirements .
      Implemented multiple dynamic features like OTP authentication, Event Management System and so on
      `
    },
    {
      id: 1,
      company: 'ThinkBridge',
      location: 'Pune',
      timeline: 'January 2022 to April 2023',
      role: 'Senior Software Engineer',
      work: `Technology: Angular12, HTML, SCSS, POSTGRESSQL, JavaScript, TypeScript, JIRA.
      Designed UI/UX in Angular with respect to creating new boilerplate for UI .
      Guided new trainee for introduction in UI repository .
      Managed and Created UI tasks in JIRA for retrospective .
      Experience on Graph Charts library for multiple UI components
  `
    },


  ]

  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  postContactDetails(reqBody:any){
    return this.http.post('https://mailthis.to/parita.patel00100@gmail.com', reqBody, { responseType: 'text'}).pipe(map((response:any)=> {
      if(response){
        return response;
      }
    },
    (error:any)=> {
      return error;
    }))
  }
}
