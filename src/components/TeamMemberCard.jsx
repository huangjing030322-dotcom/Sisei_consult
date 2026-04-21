
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TeamMemberCard = ({ name, position, avatar, initials, bgColor = 'bg-primary' }) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6 text-center">
        <Avatar className="h-24 w-24 mx-auto mb-4 rounded-xl">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className={`${bgColor} text-white text-xl rounded-xl`}>
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{position}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
