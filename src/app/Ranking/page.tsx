"use client";
import { Header } from '@/components/Header/Header'
import RankingCard from '@/components/TopThreeRanking/TopThreeRanking'
import RankingList from '@/components/RankingList/RankingList';
import { RankingSwitch } from '@/components/RankingSwitch/RankingSwitch'
import React from 'react'

const users = [
  { 
    name: 'Lorena', 
    score: 46.896, 
    imageUrl: 'https://www.clarin.com/img/2024/01/11/7AaLezyS4_600x600__1.jpg', 
    rank: 1, 
    gradient: 'linear-gradient(319.29deg, #792AFF 5.26%, #FDF551 52.03%)' 
  },
  { 
    name: 'Patricia', 
    score: 46.722, 
    imageUrl: 'https://www.clarin.com/img/2024/01/11/7AaLezyS4_600x600__1.jpg', 
    rank: 2, 
    gradient: 'linear-gradient(135deg, #FF5733, #FFC300)' 
  },
  { 
    name: 'John', 
    score: 46.652, 
    imageUrl: 'https://www.clarin.com/img/2024/01/11/7AaLezyS4_600x600__1.jpg', 
    rank: 3, 
    gradient: 'linear-gradient(135deg, #28A745, #17A2B8)' 
  },
];

const otherUsers = [
  { name: 'Kevin', score: '#45.896', imgSrc: '', rank: 4 },
  { name: 'Maria', score: '#45.652', imgSrc: '/images/maria.jpg', rank: 5 },
  { name: 'Goyo', score: '#45.543', imgSrc: '/images/goyo.jpg', rank: 6 },
  { name: 'Edgardo', score: '#45.432', imgSrc: '/images/edgardo.jpg', rank: 7 },
];


const Page = () => {
  return (
    <>
      <div>
        <Header />
        <RankingSwitch />
      </div>
      <div>
        {/* Pasamos los tres primeros usuarios a RankingCard */}
        <RankingCard users={users} />;
      </div>
      <div>
        {/* Pasamos los usuarios restantes a RankingList */}
        <RankingList otherUsers={otherUsers} />
      </div>
    </>
  )
}

export default Page
