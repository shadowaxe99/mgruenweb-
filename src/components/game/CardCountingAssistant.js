import React, { useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const getRandomCard = () => {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];
  return { suit, value };
};

export default function CardCountingAssistant() {
  const [deck, setDeck] = useState(Array.from({ length: 4 }, getRandomCard));
  const [count, setCount] = useState(0);

  const dealNewCards = () => {
    setDeck(Array.from({ length: 4 }, getRandomCard));
    // TODO: Update count based on card values
  };

  return (
    <Card className="flex flex-col items-center space-y-4">
      <CardHeader>
        <CardTitle>Card Counting Assistant</CardTitle>
        <CardDescription>Learn to count cards with our AI assistant.</CardDescription>
      </CardHeader>
      <CardContent className="flex space-x-2">
        {deck.map((card, index) => (
          <div key={index} className="border rounded bg-white shadow text-center p-2">
            <p className="text-lg font-semibold">{card.value}</p>
            <p className="text-sm">{card.suit}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col items-center space-y-2">
        <Button onClick={dealNewCards}>Deal</Button>
        <div className="border rounded bg-white shadow p-4 w-full">
          <p className="text-lg font-semibold text-center">Count: {count}</p>
          <p className="text-center">Take No Action</p>
        </div>
      </CardFooter>
    </Card>
  );
}