import * as v from 'valibot';

const UserSchema = v.object({
  avatar: v.string(),
  name: v.string(),
  ntrp: v.number(),
  age: v.number(),
  location: v.string()
})