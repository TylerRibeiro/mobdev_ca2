import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  teamMembers = [
    {
      name: "Member 1",
      role: "Role 1",
      avatar: "path/to/avatar1.png",
      photo: "path/to/photo1.png", // Add this
      bio: "Bio for Member 1", // And this
    },
    {
      name: "Member 2",
      role: "Role 2",
      avatar: "path/to/avatar2.png",
      photo: "path/to/photo2.png", // Add this
      bio: "Bio for Member 2", // And this
    },
    // more members...
  ];

  constructor() {}

  ngOnInit() {}
}
