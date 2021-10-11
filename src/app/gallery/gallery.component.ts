import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public videos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.videos = [
      {
        title: 'Sample video',
        url: 'https://www.youtube.com/embed/EngW7tLk6R8',
        description: 'This is a sample video.'
      },
      {
        title: 'Placeholder video',
        url: 'https://www.youtube.com/embed/il2ZAZX9KpQ',
        description: 'This is a placeholder video with no sound.'
      },
      {
        title: 'Test video',
        url: 'https://www.youtube.com/embed/C0DPdy98e4c',
        description: 'This is a test video for testing purpose only.'
      },
      {
        title: 'Sample external link video',
        url: 'https://www.youtube.com/embed/PCwL3-hkKrg',
        description: "It's a sample external link video with some advertisement."
      },
      {
        title: 'Bohemian Rhapsody',
        url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        description: 'Bohemian Rhapsody music video. Just enjoy !!'
      }
    ];
  }

  openModal(item) {
    console.log(item)
  }

}
