import React from 'react';
import './achieve.css';

const achievementsData = [
  {
    title: 'Despedida 2023',
    description: 'Recently got the convocation ceremony and gifts from my beloved IT juniors of my college.The day was a blast with a mixed emotions going on in our heads as we are leaving now.',
    date: 'Juniors,teachers,College Premises will always be unforgettable :(',
    link: 'https://example.com',
    image: 'https://i.ibb.co/5hC4hjP/IMG-20230510-003542.jpg'
  },
  {
    title: 'Contribution to College Cricket Team',
    description: 'Been an active part of CIEM Cricket Team since 4 year.Led from the front and took my team to the Semi Finals and Finals of many Inter College Cricket Championship.',
    date: 'Will definitely miss CIEM Ground :)',
    link: 'https://m.facebook.com/photo.php?fbid=165203716262300&id=100083180186537&set=a.123630193752986&eav=Afb0LKiOr7U-jU5KGSRQT7EkHG1bVPW8NDzI9D7uW3XSEAqXt6CiI9ZCg-YWMGwZWF8&paipv=0&source=48&ref=content_filter',
    image: 'https://i.ibb.co/2sFrNS8/IMG-7605.jpg'
  },
  {
    title: 'Inter College Treasure Hunt Champions',
    description: 'Participated and won treasure hunt competetion in CIEM Celsius 2023,Found and solved all the hints and clues and finished all the tasks within 20mins. :)',
    date: 'If you know.. you know :)',
    link: 'https://example.com',
    image: 'https://i.ibb.co/80kCnFY/IMG-3617.jpg'
  },
  {
    title: 'Co Ordinated CIEM Sports Fest',
    description: 'Been a Co Ordinator in CIEM Sports Fest, Celsius 2023.Organized various kinds of sports like Cricket,Football,Badminton,Table Tennis etc.',
    date: 'July 2021',
    link: 'https://example.com',
    image: 'https://i.ibb.co/xmLQ8p1/IMG-3001.jpg'
  },
];

const AchievementCard = ({ title, description, date, link, image }) => {
  return (
    <div className="achievement_card">
      <img src={image} alt={title} />
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="date">{date}</div>
      <div className="link">
        <a href={link}>Learn More</a>
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div className="achievements_container">
      <h1 className="achievements_header">Activities <span>and</span> Blogs</h1>
      <div className="achievements_list">
        {achievementsData.map((achievement) => (
          <AchievementCard
            key={achievement.title}
            title={achievement.title}
            description={achievement.description}
            date={achievement.date}
            link={achievement.link}
            image={achievement.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
