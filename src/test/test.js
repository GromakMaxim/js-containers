import Player from '../Player.js';
import Team from '../index.js';

/*
* correct input
* */

test('should return correct arr(input: 1 players)', () => {
  const p1 = new Player('IvanVanko', 200, 150, 100);

  const team = new Team();
  team.add(p1);

  const actual = team.toArray();
  const expected = [p1];

  expect(actual).toStrictEqual(expected);
});

test('should return correct arr(input: 2 players)', () => {
  const p1 = new Player('IvanVanko', 200, 150, 100);
  const p2 = new Player('IronMan', 120, 200, 120);

  const team = new Team();
  team.add(p1);
  team.add(p2);

  const actual = team.toArray();
  const expected = [p1, p2];

  expect(actual).toStrictEqual(expected);
});

test('should return correct arr(input: 3 players)', () => {
  const p1 = new Player('IvanVanko', 200, 150, 100);
  const p2 = new Player('IronMan', 120, 200, 120);
  const p3 = new Player('SamuelSterns', 90, 400, 700);

  const team = new Team();
  team.add(p1);
  team.add(p2);
  team.add(p3);

  const actual = team.toArray();
  const expected = [p1, p2, p3];

  expect(actual).toStrictEqual(expected);
});

test('should return correct arr(input: 3 players)', () => {
  const p1 = new Player('IvanVanko', 200, 150, 100);
  const p2 = new Player('IronMan', 120, 200, 120);
  const p3 = new Player('SamuelSterns', 90, 400, 700);

  const team = new Team();
  team.addAll(p1, p2, p3);

  const actual = team.toArray();
  const expected = [p1, p2, p3];

  expect(actual).toStrictEqual(expected);
});

/*
* incorrect input
* */

test('should throw error(input: 1 repeated player)', () => {
  const p1 = new Player('IvanVanko', 200, 150, 100);
  const p2 = new Player('IronMan', 120, 200, 120);
  const p3 = new Player('SamuelSterns', 90, 400, 700);

  const team = new Team();
  team.add(p1);
  team.add(p2);
  team.add(p3);

  try {
    team.add(p3);
  } catch (e) {
    expect(e).not.toBeNull();
  }
});
