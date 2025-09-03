import { Team } from '../Team.js';
import { Character } from '../Character.js';

describe('Team iterator tests', () => {
  test('Пустая команда не должна перебирать какие-либо символы', () => {
    const emptyTeam = new Team();
    const results = [];

    for (const character of emptyTeam) {
      results.push(character);
    }

    expect(results).toEqual([]);
  });

  test('Команда с одним персонажем', () => {
    const char = new Character({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    });
    const team = new Team([ char ]);

    const results = [];
    for (const c of team) {
      results.push(c);
    }

    expect(results).toHaveLength(1);
    expect(results[0]).toEqual(char);
    expect(results[0].name).toBe('Лучник');
  });

  test('Порядок повторения нескольких персонажей', () => {
    const char1 = new Character({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    });
    const char2 = new Character({
      name: 'Маг',
      type: 'Mage',
      health: 70,
      level: 2,
      attack: 60,
      defence: 5,
    });
    const char3 = new Character({
      name: 'Воин',
      type: 'Warrior',
      health: 100,
      level: 3,
      attack: 80,
      defence: 20,
    });
    const team = new Team([
      char1, char2, char3
    ]);

    const results = [];
    for (const c of team) {
      results.push(c);
    }

    expect(results[0]).toEqual(char1);
    expect(results[0].name).toBe('Лучник');
    expect(results[1]).toEqual(char2);
    expect(results[1].name).toBe('Маг');
    expect(results[2]).toEqual(char3);
    expect(results[2].name).toBe('Воин');

  });

  test('Персонажи это экземпляры класса Character', () => {
    const char1 = new Character({
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    });
    const team = new Team([ char1 ]);

    for (const c of team) {
      expect(c).toBeInstanceOf(Character);
    }
  });
});
