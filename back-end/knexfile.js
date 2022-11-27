/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://nermjwuh:q6HKl0qxsQyHoPg5_9ld_ybY-QPOa-5f@heffalump.db.elephantsql.com/nermjwuh",
  DATABASE_URL_DEVELOPMENT = "postgres://tkbkitfd:EkweMsnMxp-I86FCf1DqeWDmEbTc2SO4@heffalump.db.elephantsql.com/tkbkitfd",
  DATABASE_URL_TEST = "postgres://rxinacfv:1IX1fugG2_oFHuDtq4GO2wSLz2xmHyei@heffalump.db.elephantsql.com/rxinacfv",
  DATABASE_URL_PREVIEW = "postgres://kdmhuhca:mfCGAXu-lCUYDC80MorYy284MdEn0zUE@heffalump.db.elephantsql.com/kdmhuhca",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 10 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
