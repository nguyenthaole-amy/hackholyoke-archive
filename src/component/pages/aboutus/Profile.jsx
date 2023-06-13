import React , { useMemo } from "react"
import ProfileItem from "./ProfileItem"
import "./Profile.css";

function Profile() {

      const profiles = useMemo(() => [
        {
          Image : "julia",
            Name: "Julia Ho",
            Team: "Co-Chair",
            ClassY: 2025,
            Major: "Computer Science & Mathematics",
            Pronouns: "She/Her",
           LinkedIn : "https://www.linkedin.com/in/diep-julia-ho/",
          },
          {
            Image : "robin",
              Name: "Robin Tran",
              Team: "Co-Chair",
              ClassY: 2025,
              Major: "Data Science",
              Pronouns: "She/Her",
             LinkedIn : "https://www.linkedin.com/in/robin-tran/",
            },
            { Image : "sicily",
          Name: "Sicily Xiao",
          Team:"Marketing",
          ClassY: 2025,
          Major: "Computer Science & Music",
          Pronouns: "She/They",
          LinkedIn : "https://www.linkedin.com/in/yixiao-sicily-xiao-199157214/",
        },
            {
              Image : "amy",
              Name: "Amy Le",
              Team:"Design Web Development",
              ClassY: 2025,
              Major: "Computer Science",
              Pronouns: "She/Her",
              LinkedIn : "https://www.linkedin.com/in/thao-le-amy-4a6092189/",
            },
            { Image : "sharon",
            Name: "Sharon Kang",
            Team:"Web Development",
            ClassY: 2024,
            Major: "Computer Science",
            Pronouns: "She/Her",
            LinkedIn : "https://www.linkedin.com/in/dayeonkang28/",
          },
          { Image : "hejin",
            Name: "Hejin Jeong",
            Team:"Web Development",
            ClassY: 2023,
            Major: "Computer Science",
            Pronouns: "She/Her",
            LinkedIn : "https://www.linkedin.com/in/hejin-jeong/",
          },
            {
            Image : "ellie",
              Name: "Ellie Do",
              Team: "Finance",
              ClassY: 2025,
              Major: "Computer Science",
              Pronouns: "She/Her",
            LinkedIn : "https://www.linkedin.com/in/ngoc-do-725069162/",
            },
            
        { Image : "nayeon",
        Name: "Nayeon Shin",
        Team: "Sponsorship",
        ClassY: 2024,
        Major: "Computer Science",
        Pronouns: "She/They",
        LinkedIn : "https://www.linkedin.com/in/nayeon-shin/",
      },
          {
            Image : "abigel",
            Name: "Abigel Asteraye",
            Team:"Logistics",
            ClassY: 2025,
            Major: "Computer Science & Statistics",
            Pronouns: "She/Her",
          LinkedIn : "https://www.linkedin.com/in/abigel-asteraye/",
          },
          {
            Image : "mumtaz",
            Name: "Mumtaz Fatima",
            Team:"Logistics",
            ClassY: 2025,
            Major: "Computer Science & Economics",
            Pronouns: "She/Her",
          LinkedIn : "https://www.linkedin.com/in/mumtazf/",
          },
        { Image : "eunyoung",
          Name: "Zoey Hong",
          Team:"Logistics",
          ClassY: 2024,
          Major: "Computer Science",
          Pronouns: "She/Her",
          LinkedIn : "https://www.linkedin.com/in/hieunyoung/",
        },
        { Image : "jennifer",
          Name: "Jennifer Pham",
          Team:"Logistics",
          ClassY: 2025,
          Major: "Data Science",
          Pronouns: "She/Her",
          LinkedIn : "https://www.linkedin.com/in/linh-pham-t/",
        }
    ], []);
          
    return (
        <>
        <hr/>
        <h1 className="meet-h1">Meet Our Team</h1>
            <div className="profile-row" >
            {profiles.map((item) => (
          <ProfileItem key={item.index} {...item} />
        ))}
            </div>
            </>
        
    );
}

export default Profile;