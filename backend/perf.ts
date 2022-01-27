const car = {
  name: 'gol',
  year: 2374
}

type caro = keyof typeof car

type rev = {
  [prop in caro]?: 1
}

const n: rev = {
  name: 1
}