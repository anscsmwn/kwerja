import fs from 'fs'
import path from 'path'
import { faker } from '@faker-js/faker'

import { labels, priorities, statuses } from './data'

const outputDirectory = path.join(__dirname, 'output')
const outputPath = path.join(outputDirectory, 'tasks.json')
// Check if the output directory exists, and create it if it doesn't.
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true })
}

const tasks = Array.from({ length: 100 }, () => ({
  id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
  title: faker.hacker
    .phrase()
    .replace(/^./, (letter: string) => letter.toUpperCase()),
  employee: faker.person.fullName(),
  status: faker.helpers.arrayElement(statuses).value,
  label: faker.helpers.arrayElement(labels).value,
  priority: faker.helpers.arrayElement(priorities).value,
}))

fs.writeFileSync(outputPath, JSON.stringify(tasks, null, 2))
console.log(outputPath)
console.log('✅ Tasks data generated.')
