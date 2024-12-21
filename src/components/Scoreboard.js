// src/components/Scoreboard.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Scoreboard = ({ teamA, teamB }) => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const addScoreA = () => setScoreA(scoreA + 1);
  const subtractScoreA = () => setScoreA(scoreA > 0 ? scoreA - 1 : 0);
  
  const addScoreB = () => setScoreB(scoreB + 1);
  const subtractScoreB = () => setScoreB(scoreB > 0 ? scoreB - 1 : 0);
  
  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const winnerMessage = () => {
    if (scoreA >= 10) return `${teamA} menang!`;
    if (scoreB >= 10) return `${teamB} menang!`;
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{teamA} vs {teamB}</Text>
      <Text style={styles.score}>{teamA}: {scoreA}</Text>
      <Text style={styles.score}>{teamB}: {scoreB}</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={addScoreA} />
        <Button title="-" onPress={subtractScoreA} />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={addScoreB} />
        <Button title="-" onPress={subtractScoreB} />
      </View>

      <Button title="Reset" onPress={resetScores} />
      
      {winnerMessage() && <Text style={styles.winner}>{winnerMessage()}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  score: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  winner: {
    fontSize: 20,
    color: 'green',
    marginTop: 20,
  },
});

export default Scoreboard;