import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public videos: any[] = [];
  public clickedVideoUrl: string = "";
  public clickedVideoHeading: string = "";
  public youtubeChannelLink: string = "https://youtube.com/channel/UCjn3Re0MRJq2RMR7zkMrtmA";
  public closeResult = '';
  @ViewChild("myModal") myModal: ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.videos = [
      {
        title: "Nawazuddin's style",
        url: 'https://youtube.com/embed/vFfqzFKuK0k',
        description: 'Display of a variety of emotions.'
      },
      {
        title: 'Romantic role',
        url: 'https://youtube.com/embed/0F2Oy5HhZ-I',
        description: "ROMANTIC. Taken from the movie 'Aandhi'."
      },
      {
        title: 'Action role',
        //url: 'https://youtube.com/embed/shorts/f2q2dj9y5vg',
        url: 'https://www.youtube.com/embed/f2q2dj9y5vg',
        description: 'ACTION. My performance in an action role.'
      },
      {
        title: "Sharmaji's role",
        url: 'https://youtube.com/embed/U9gXTU2JC_c',
        description: "COMEDY. It's a part of my script 'The Running Star'."
      },
      {
        title: "Farhan's style",
        url: 'https://youtube.com/embed/JNoLbChiTJc',
        description: 'COMEDY. A comedy clip.'
      },
      {
        title: 'Makaan maalik se mera jhagra ho gaya...',
        url: 'https://youtube.com/embed/q1zquygNE70',
        description: "COMEDY. Part of my script. Main character performance."
      },
      {
        title: 'Kabhi kabhi mere dil mein khayaal aata hai',
        url: 'https://youtube.com/embed/7F2rvDFwDKo',
        description: 'COMEDY. A comedy clip.'
      },
      {
        title: "Drunkard's role",
        url: 'https://youtube.com/embed/apXYb6ggPls',
        description: "COMEDY. My performance as a drunkard."
      },
      {
        title: "English dialogue",
        url: 'https://youtube.com/embed/X2yX06CY3BI',
        description: "COMEDY. Demo for my English dialogue delivery."
      },
      {
        title: "Central character's role",
        url: 'https://youtube.com/embed/uXH1W0-Fy9c',
        description: "COMEDY. Part of my script. Main character performance."
      },
      {
        title: 'Profile video',
        url: 'https://youtube.com/embed/luT8FMgFEmM',
        description: 'My profile video.'
      },
      {
        title: 'Paani re paani song',
        url: 'https://www.youtube.com/embed/bXNQR3DE7ts',
        description: `A sad song sung by me to showcase my work, though not a singer. 
                      Used Voloco auto-tune app.`
      },
      {
        title: 'Tune haath jo thaama song',
        url: 'https://www.youtube.com/embed/XyllzBacoKY',
        description: `A romantic song sung by me to showcase my work, though not a singer. 
                    `
      },
      {
        title: 'Ye jo phoolon ki bele...',
        url: 'https://www.youtube.com/embed/1zYPtC8lmmQ',
        description: 'ROMANTIC. Acting video for demo purpose.'
      },
    ];
  }

  showContent(item) {
    console.log(item)
    this.clickedVideoUrl = item.url + "?autoplay=1";
    this.clickedVideoHeading = item.title;
    this.openModal();
  }

  openModal() {
    console.log(this.myModal)
    this.modalService.open(this.myModal, { size: 'xl', backdrop: 'static' }).result
      .then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed `;
      });
  }

}
