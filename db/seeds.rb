# Create 10 users
10.times do
  User.create!(
    email: Faker::Internet.unique.email,
    password: 'password', # Vous pouvez ajuster le mot de passe en fonction de vos besoins
    username: Faker::Name.unique.first_name
  )
end

# Create 30 articles linked to users
30.times do
  user = User.all.sample # Sélectionne un utilisateur au hasard

  Article.create!(
    title: Faker::Hipster.word.capitalize,
    content: Faker::ChuckNorris.fact,
    user: user
  )
end
