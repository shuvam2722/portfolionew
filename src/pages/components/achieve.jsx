import React from 'react';
import './achieve.css';

const achievementsData = [
  {
    title: 'First Achievement',
    description: 'This is the description of the first achievement. It can be multiple lines long and should describe the achievement in detail.',
    date: 'May 2021',
    link: 'https://example.com',
    image: 'https://d299ydywi1tak7.cloudfront.net/media/colleges/50/media/campus.jpg'
  },
  {
    title: 'Leading a College Cricket Team',
    description: 'Been an active part of CIEM Cricket Team since 4 year.Lead from the front and took my to the Semi Finals and Finals of many Inter College Cricket Championship.',
    date: 'Will definitely miss CIEM Ground :)',
    link: 'https://m.facebook.com/photo.php?fbid=165203716262300&id=100083180186537&set=a.123630193752986&eav=Afb0LKiOr7U-jU5KGSRQT7EkHG1bVPW8NDzI9D7uW3XSEAqXt6CiI9ZCg-YWMGwZWF8&paipv=0&source=48&ref=content_filter',
    image: 'https://i.ibb.co/2sFrNS8/IMG-7605.jpg'
  },
  {
    title: 'Inter College Treasure Hunt Champions',
    description: 'Participated and won treasure hunt competetion in CIEM Celsius 2023,Found and solve all the hints and clues within 20mins. :)',
    date: 'If you know.. you know :)',
    link: 'https://example.com',
    image: 'https://i.ibb.co/80kCnFY/IMG-3617.jpg'
  },
  {
    title: 'Fourth Achievement',
    description: 'This is the description of the fourth achievement. It can be multiple lines long and should describe the achievement in detail.',
    date: 'July 2021',
    link: 'https://example.com',
    image: 'https://d299ydywi1tak7.cloudfront.net/media/colleges/50/media/campus.jpg'
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
      <h1 className="achievements_header">My Achievements</h1>
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
