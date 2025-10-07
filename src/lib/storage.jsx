
function uid() {
  return Math.random().toString(36).substr(2, 9);
}

const seedPets = [
  {
    id: "p1",
    name: "Rex",
    species: "Cachorro",
    breed: "Labrador",
    age: 5,
    notes: "Muito brincalhão",
    tutorId: "t1",
    photo: "https://place-puppy.com/300x200",
  },
  {
    id: "p2",
    name: "Miau",
    species: "Gato",
    breed: "Siamês",
    age: 3,
    notes: "Adora dormir",
    tutorId: "t2",
    photo: "https://placekitten.com/300/200",
  },
  {
    id: "p3",
    name: "Nemo",
    species: "Peixe",
    breed: "Palhaço",
    age: 1,
    notes: "Muito curioso",
    tutorId: "t3",
    photo: "https://placekitten.com/300/200",
  },
];

const seedTutors = [
  { id: "t1", name: "Ana", phone: "99999-1111" },
  { id: "t2", name: "Carlos", phone: "98888-2222" },
  { id: "t3", name: "Beatriz", phone: "97777-3333" },
];

export function seedIfEmpty() {
  if (!localStorage.getItem("pets")) {
    localStorage.setItem("pets", JSON.stringify(seedPets));
  }
  if (!localStorage.getItem("tutors")) {
    localStorage.setItem("tutors", JSON.stringify(seedTutors));
  }
}

export function getPets() {
  if (typeof window === "undefined") return []; 
  return JSON.parse(localStorage.getItem("pets") || "[]");
}


export function getPetById(id) {
  return getPets().find((p) => p.id === id);
}

export function addPet(pet) {
  const pets = getPets();
  const newPet = { ...pet, id: uid() };
  pets.push(newPet);
  localStorage.setItem("pets", JSON.stringify(pets));
  return newPet;
}

export function updatePet(pet) {
  const pets = getPets().map((p) => (p.id === pet.id ? pet : p));
  localStorage.setItem("pets", JSON.stringify(pets));
}

export function removePet(id) {
  const pets = getPets().filter((p) => p.id !== id);
  localStorage.setItem("pets", JSON.stringify(pets));
}

export function getTutors() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("tutors") || "[]");
}

export function addTutor(tutor) {
  const tutors = getTutors();
  const newTutor = { ...tutor, id: uid() };
  tutors.push(newTutor);
  localStorage.setItem("tutors", JSON.stringify(tutors));
  return newTutor;
}
