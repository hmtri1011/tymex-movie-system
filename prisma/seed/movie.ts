import { Genre } from '@prisma/client'
import type { Movie } from '@prisma/client'

export const movies: Omit<Movie, 'createdAt' | 'updatedAt'>[] = [
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3610',
		title: 'The Grudge',
		description:
			'The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.',
		releaseYear: 2020,
		genre: [Genre.SCIENCE_FICTION, Genre.ACTION],
		poster: 'https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3611',
		title: 'The Conjuring: The Devil Made Me Do It',
		description: `The Conjuring: The Devil Made Me Do It is a 2021 American supernatural horror film directed by Michael Chaves, with a screenplay by David Leslie Johnson-McGoldrick from a story by Johnson-McGoldrick and James Wan. The film serves as a sequel to The Conjuring (2013) and The Conjuring 2 (2016), and as the eighth installment in The Conjuring Universe. Patrick Wilson and Vera Farmiga reprise their roles as paranormal investigators and authors Ed and Lorraine Warren, with Ruairi O'Connor, Sarah Catherine Hook, and Julian Hilliard also starring. Wan and Peter Safran return to produce the film, which is based on the trial of Arne Cheyenne Johnson, a murder trial that took place in 1981 Connecticut, in addition to The Devil in Connecticut, a book about the trial written by Gerald Brittle.`,
		releaseYear: 2013,
		genre: [Genre.HORROR],
		poster: 'https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3612',
		title: 'Underwater',
		description:
			'Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.',
		releaseYear: 2020,
		genre: [Genre.ACTION, Genre.HORROR, Genre.SCIENCE_FICTION],
		poster: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3613',
		title: 'Like a Boss',
		description:
			'Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.',
		releaseYear: 2020,
		genre: [Genre.COMEDY],
		poster: 'https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3614',
		title: 'Three Christs',
		description:
			"Three Christs, also known as State of Mind, is a 2017 American drama film directed, co-produced, and co-written by Jon Avnet and based on Milton Rokeach's nonfiction book The Three Christs of Ypsilanti. It screened in the Gala Presentations section at the 2017 Toronto International Film Festival. The film is also known as: Three Christs of Ypsilanti, The Three Christs of Ypsilanti, Three Christs of Santa Monica, and The Three Christs of Santa Monica.",
		releaseYear: 2017,
		genre: [Genre.DRAMA],
		poster: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3615',
		title: 'Inherit the Viper',
		description:
			'Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen, in his feature directorial debut, from a screenplay by Andrew Crabtree. It stars Josh Hartnett, Margarita Levieva, Chandler Riggs, Bruce Dern, Valorie Curry, Owen Teague, and Dash Mihok.',
		releaseYear: 2019,
		genre: [Genre.ACTION, Genre.DRAMA],
		poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3616',
		title: 'The Sonata',
		description:
			'The Sonata is a 2018 mystery thriller film, directed by Andrew Desmond, from a screenplay by Desmond and Arthur Morin. It stars Freya Tingley, Simon Abkarian, James Faulkner, Rutger Hauer, Matt Barber and James Kermack. It was released in the United States on January 10, 2020, by Screen Media Films. It grossed $146,595 at the box office and received mixed reviews from critics.',
		releaseYear: 2018,
		genre: [Genre.HORROR, Genre.THRILLER],
		poster: 'https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3617',
		title: 'The Murder of Nicole Brown Simpson',
		description:
			"The Murder of Nicole Brown Simpson is a 2019 American crime horror film directed by Daniel Farrands. The film is loosely based on the murder of Nicole Brown Simpson, presenting a version of events in which Brown Simpson is murdered by serial killer Glen Edward Rogers, and not by O. J. Simpson, her ex-husband and the primary suspect in the case. Though Mena Suvari's performance as Nicole Brown was praised, the film was panned by critics.",
		releaseYear: 2019,
		genre: [Genre.THRILLER, Genre.HORROR],
		poster: 'https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3618',
		title: 'Bad Boys for Life',
		description:
			"Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola Núñez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
		releaseYear: 2020,
		genre: [Genre.ACTION, Genre.COMEDY],
		poster: 'https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3619',
		title: 'Dolittle',
		description:
			"Dolittle is a 2020 American fantasy adventure film directed by Stephen Gaghan from a screenplay by Gaghan, Dan Gregor, and Doug Mand, based on a story by Thomas Shepherd. Dolittle is based on the title character created by Hugh Lofting and is primarily inspired by the author's second Doctor Dolittle book, The Voyages of Doctor Dolittle (1922). Robert Downey Jr. stars as the title character, alongside Antonio Banderas and Michael Sheen in live-action roles, with Emma Thompson, Rami Malek, John Cena, Kumail Nanjiani, Octavia Spencer, Tom Holland, Craig Robinson, Ralph Fiennes, Selena Gomez, and Marion Cotillard voicing an array of creatures.",
		releaseYear: 2020,
		genre: [Genre.SCIENCE_FICTION, Genre.ACTION],
		poster: 'https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3620',
		title: 'A Fall from Grace',
		description:
			'A Fall from Grace is a 2020 American thriller film produced, written, and directed by Tyler Perry and his first to be released by Netflix. The film follows a woman who finds a dangerous new love and the novice attorney who defends her in a sensational court case. This was the final film of actor Cicely Tyson before her death in January 2021.',
		releaseYear: 2020,
		genre: [Genre.THRILLER],
		poster: 'https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3621',
		title: 'The Gentlemen',
		description:
			'The Gentlemen is a 2019 action comedy film written, directed and produced by Guy Ritchie, who developed the story along with Ivan Atkinson and Marn Davies. The film stars Matthew McConaughey, Charlie Hunnam, Henry Golding, Michelle Dockery, Jeremy Strong, Eddie Marsan, Colin Farrell, and Hugh Grant. It follows an American cannabis wholesaler in England who is looking to sell his business, setting off a chain of blackmail and schemes to undermine him.',
		releaseYear: 2020,
		genre: [Genre.ACTION, Genre.COMEDY],
		poster: 'https://upload.wikimedia.org/wikipedia/en/0/06/The_Gentlemen_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3721',
		title: 'The Turning',
		description:
			'The Turning is a 2020 American gothic supernatural horror film directed by Floria Sigismondi and written by Carey W. Hayes and Chad Hayes. It is a modern adaptation of the 1898 ghost story The Turn of the Screw by Henry James. It stars Mackenzie Davis, Finn Wolfhard, Brooklynn Prince, and Joely Richardson, and follows a young governess in 1994 who is hired to watch over two children after their parents are killed.',
		releaseYear: 2020,
		genre: [Genre.HORROR, Genre.ACTION],
		poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/The_Turning_poster_2020.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3722',
		title: 'The Last Full Measure',
		description:
			'The Last Full Measure is a 2019 American war drama film written and directed by Todd Robinson. It follows the efforts of fictional Pentagon staffer Scott Huffman and many veterans to see the Medal of Honor awarded to William H. Pitsenbarger, a United States Air Force Pararescueman who flew in helicopter rescue missions during the Vietnam War to aid downed soldiers and pilots. Based on true events, the film stars Sebastian Stan, Christopher Plummer, William Hurt, Ed Harris, Samuel L. Jackson, Jeremy Irvine, and Peter Fonda.',
		releaseYear: 2019,
		genre: [Genre.DRAMA, Genre.ACTION],
		poster: 'https://upload.wikimedia.org/wikipedia/en/9/9d/The_Last_Full_Measure_2019_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3723',
		title: 'John Henry',
		description:
			'John Henry is a 2020 American thriller drama film starring Terry Crews and Ludacris, and directed by Will Forbes. Inspired by the folk lore of John Henry, the plot follows an ex-gang member from Los Angeles who must help two immigrant children who are on the run from his former crime boss.',
		releaseYear: 2020,
		genre: [Genre.DRAMA, Genre.THRILLER],
		poster: 'https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3724',
		title: 'The Rhythm Section',
		description:
			'The Rhythm Section is a 2020 action thriller film directed by Reed Morano and with a screenplay by Mark Burnell based on his novel of the same name. Starring Blake Lively, Jude Law and Sterling K. Brown, and follows a grieving woman who seeks revenge after discovering that the plane crash that killed her family was a terrorist attack.',
		releaseYear: 2020,
		genre: [Genre.ACTION, Genre.THRILLER],
		poster: 'https://upload.wikimedia.org/wikipedia/en/9/98/The_Rhythm_Section_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3725',
		title: 'Gretel & Hansel',
		description:
			'Gretel & Hansel is a 2020 dark fantasy horror film based on the German folklore tale "Hansel and Gretel" by the Brothers Grimm. The film is directed by Oz Perkins, and produced by Fred Berger, Brian Kavanaugh-Jones, and Dan Kagan, with a screenplay by Rob Hayes. Sophia Lillis and Sam Leakey portray the titular characters, alongside Alice Krige and Jessica De Gouw. The story follows Gretel and Hansel as they enter the dark woods in order to find work and food, and then stumble upon the home of a witch.',
		releaseYear: 2020,
		genre: [Genre.HORROR, Genre.SCIENCE_FICTION],
		poster:
			'https://upload.wikimedia.org/wikipedia/en/d/de/Gretel_%26_Hansel_-_A_Grim_Fairy_Tale_theatrical_poster.jpeg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3726',
		title: 'The Assistant',
		description:
			'The Assistant is a 2019 American drama film written, directed, produced, and edited by Kitty Green. The film stars Julia Garner as a junior assistant at a film production company. Matthew Macfadyen, Makenzie Leigh, Kristine Froseth, Jon Orsini, and Noah Robbins also star.',
		releaseYear: 2019,
		genre: [Genre.DRAMA],
		poster: 'https://upload.wikimedia.org/wikipedia/en/9/9b/The_Assistant_poster.jpeg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3727',
		title: 'Birds of Prey',
		description:
			'Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn), also known as Harley Quinn: Birds of Prey or simply Birds of Prey, is a 2020 American superhero film directed by Cathy Yan and written by Christina Hodson, based on the DC Comics team, the Birds of Prey. Produced by Warner Bros., DC Films, LuckyChap Entertainment, Clubhouse Pictures, and Kroll & Co. Entertainment, it is the eighth installment in the DC Extended Universe (DCEU), and serves as a spin-off and sequel to Suicide Squad (2016). It stars Margot Robbie as Harley Quinn alongside Mary Elizabeth Winstead, Jurnee Smollett-Bell, Rosie Perez, Chris Messina, Ella Jay Basco, Ali Wong, and Ewan McGregor. The film follows Harley Quinn, who, after breaking up with the Joker, is threatened by Gotham City crime lord Roman Sionis, and joins forces with Helena Bertinelli, Dinah Lance and Renee Montoya (who go on to form the Birds of Prey) to save Cassandra Cain.',
		releaseYear: 2020,
		genre: [Genre.ACTION, Genre.SCIENCE_FICTION],
		poster: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3728',
		title: 'The Lodge',
		description:
			"The Lodge is a 2019 psychological horror film directed by Veronika Franz and Severin Fiala, written by Franz, Fiala, and Sergio Casci, and starring Riley Keough, Jaeden Martell, Lia McHugh, Alicia Silverstone, and Richard Armitage. Its plot follows a soon-to-be stepmother who, alone with her fiancé's two children, becomes stranded at their rural lodge during Christmas. There, she and the children experience a number of unexplained events that seem to be connected to her past.",
		releaseYear: 2020,
		genre: [Genre.HORROR],
		poster: 'https://upload.wikimedia.org/wikipedia/en/c/cf/The_Lodge_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3729',
		title: 'Timmy Failure: Mistakes Were Made',
		description:
			'Timmy Failure: Mistakes Were Made is a 2020 American adventure fantasy comedy-drama family film based on the book series of the same name by Stephan Pastis that debuted on Disney+ on February 7, 2020. The film is directed by Tom McCarthy, produced by Alexander Dostal, McCarthy and Jim Whitaker from a screenplay written by McCarthy and Pastis and stars Winslow Fegley, Ophelia Lovibond, Craig Robinson and Wallace Shawn.',
		releaseYear: 2020,
		genre: [Genre.HORROR, Genre.COMEDY, Genre.DRAMA, Genre.ROMANCE, Genre.SCIENCE_FICTION],
		poster: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Timmy_Failure_Mistakes_Were_Made_Poster.jpeg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3730',
		title: 'Horse Girl',
		description:
			'Horse Girl is a 2020 American psychological drama film directed and produced by Jeff Baena, from a screenplay written by Baena and Alison Brie. It stars Brie, Debby Ryan, John Reynolds, Molly Shannon, John Ortiz, and Paul Reiser.',
		releaseYear: 2020,
		genre: [Genre.DRAMA],
		poster: 'https://upload.wikimedia.org/wikipedia/en/3/37/Horse_Girl_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3731',
		title: 'To All the Boys: P.S. I Still Love You',
		description:
			'To All the Boys: P.S. I Still Love You is a 2020 American teen romantic comedy film directed by Michael Fimognari, from a screenplay by Sofia Alvarez and Michael Fimognari, based on the 2017 novel of the same name by Jenny Han. It is the sequel to the 2018 film To All the Boys I Loved Before and the second installment in the To All the Boys film series. The film stars Lana Condor, Noah Centineo, Janel Parrish, Anna Cathcart, Madeleine Arthur, and Emilija Baranac. It was released on February 12, 2020, by Netflix.',
		releaseYear: 2020,
		genre: [Genre.COMEDY, Genre.ROMANCE],
		poster: 'https://upload.wikimedia.org/wikipedia/en/d/d2/To_All_the_Boys_P.S._I_Still_Love_You_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3732',
		title: 'The Personal History of David Copperfield',
		description:
			'The Personal History of David Copperfield is a 2020 British biographical comedy-drama film written, directed by and starring Armando Iannucci, based on the 1850 Charles Dickens novel of the same name. The film stars Dev Patel as David Copperfield, with Tilda Swinton, Hugh Laurie, and Peter Capaldi in supporting roles. It had its world premiere at the 2020 BFI London Film Festival on October 11, 2020, and was released in the United Kingdom on February 28, 2020, by StudioCanal. It was released in the United States on March 4, 2020, by Amazon Studios.',
		releaseYear: 2020,
		genre: [Genre.COMEDY, Genre.DRAMA],
		poster: 'https://upload.wikimedia.org/wikipedia/en/d/d2/The_Personal_History_of_David_Copperfield_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3733',
		title: 'The Old Guard',
		description:
			'The Old Guard is a 2020 American action thriller film directed by Gina Prince-Bythewood and written by Greg Rucka, based on his comic book series of the same name. The film stars Charlize Theron, KiKi Layne, Matthias Schoenaerts, Marwan Kenzari, Luca Marinelli, and Van Veronica Ngo. It follows a group of immortals who must fight to keep their identity secret while battling against powerful enemies in the present day.',
		releaseYear: 2020,
		genre: [Genre.ACTION, Genre.THRILLER],
		poster: 'https://upload.wikimedia.org/wikipedia/en/d/d2/The_Old_Guard_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3734',
		title: 'The King of Staten Island',
		description:
			'The King of Staten Island is a 2020 American semi-autobiographical comedy-drama film written, directed, and starring Judd Apatow. The film stars Pete Davidson as a man who struggles to find his place in the world after his father, played by Bill Burr, dies while he is a firefighter. The film also stars Marisa Tomei, Bel Powley, and Steve Buscemi.',
		releaseYear: 2020,
		genre: [Genre.COMEDY, Genre.DRAMA],
		poster: 'https://upload.wikimedia.org/wikipedia/en/d/d2/The_King_of_Staten_Island_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3735',
		title: 'A Family Affair',
		description:
			'A Family Affair is an upcoming American romantic comedy film directed by Richard LaGravenese and written by Carrie Solomon. The film stars Nicole Kidman, Zac Efron, Joey King, Liza Koshy, and Kathy Bates.',
		releaseYear: 2023,
		genre: [Genre.COMEDY, Genre.ROMANCE],
		poster: 'https://upload.wikimedia.org/wikipedia/en/d/d2/The_King_of_Staten_Island_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3736',
		title: 'Renfield',
		description:
			"Renfield is a 2023 American supernatural comedy horror film directed and co-produced by Chris McKay and written by Ryan Ridley from an original idea by Robert Kirkman. Featuring characters from Bram Stoker's 1897 novel Dracula, the film stars Nicholas Hoult as the title character and Nicolas Cage as Dracula, with Awkwafina, Ben Schwartz, Adrian Martinez, and Shohreh Aghdashloo in supporting roles.",
		releaseYear: 2023,
		genre: [Genre.COMEDY, Genre.HORROR, Genre.ROMANCE],
		poster: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Poster_Renfield.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3737',
		title: "The Pope's Exorcist",
		description:
			"The Pope's Exorcist is a 2023 American supernatural horror film directed by Julius Avery, and starring Russell Crowe as Father Gabriele Amorth. The film also stars Daniel Zovatto, Alex Essoe and Franco Nero. It is based on Amorth's memoirs An Exorcist Tells His Story and An Exorcist: More Stories.",
		releaseYear: 2023,
		genre: [Genre.HORROR, Genre.THRILLER],
		poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/ThePopesExorcistPoster.png'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3738',
		title: 'Mafia Mamma',
		description:
			'Mafia Mamma is an upcoming American action comedy film directed by Catherine Hardwicke, from a screenplay by Michael J. Feldman and Debbie Jhoon, and based on an original story by Amanda Sthers. It stars Toni Collette as an American woman who travels to Italy following the death of her grandfather, who she finds out was a mafia Don. Monica Bellucci and Sophia Nomvete also star.',
		releaseYear: 2023,
		genre: [Genre.ACTION, Genre.COMEDY],
		poster: 'https://upload.wikimedia.org/wikipedia/en/4/48/Mafia_mamma_film.png'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3739',
		title: 'Sweetwater',
		description:
			'Sweetwater is an upcoming American sports biographical independent film directed and written by Martin Guigui. It stars Everett Osborne, Cary Elwes, Jeremy Piven, Richard Dreyfuss and Kevin Pollak. Osborne portrays Nat Clifton as the film depicts the true story of his career in the 1950s, starting with the Harlem Globetrotters before becoming the second African-American to sign a contract with the National Basketball Association (NBA).',
		releaseYear: 2023,
		genre: [Genre.ROMANCE, Genre.DRAMA],
		poster: 'https://upload.wikimedia.org/wikipedia/en/8/83/Sweetwater_2023_Poster.png'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3740',
		title: 'Aquaman and the Lost Kingdom',
		description:
			'Aquaman and the Lost Kingdom is an upcoming American superhero film based on the DC Comics character Aquaman. Produced b y DC Studios, the Safran Company, and Atomic Monster Productions, and set for distribution by Warner Bros. Pictures, it is intended to be the sequel to Aquaman (2018), and the 15th and final installment in the DC Extended Universe (DCEU). The film is directed by James Wan from a screenplay written by David Leslie Johnson-McGoldrick, and stars Jason Momoa as Arthur Curry / Aquaman alongside Amber Heard, Willem Dafoe, Patrick Wilson, Dolph Lundgren, Yahya Abdul-Mateen II, Temuera Morrison, and Nicole Kidman.',
		releaseYear: 2023,
		genre: [Genre.ACTION, Genre.SCIENCE_FICTION],
		poster:
			'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aquaman_and_the_Lost_Kingdom_logo.jpg/320px-Aquaman_and_the_Lost_Kingdom_logo.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3741',
		title: 'Malum',
		description:
			'Malum is a 2023 American horror film directed by Anthony DiBlasi, who co-wrote the film with Scott Poiley. It is a reboot/reimagining of the 2014 film Last Shift, also directed by DiBlasi. Malum stars Jessica Sula, Eric Olson, Chaney Morrow and Candice Coke.',
		releaseYear: 2023,
		genre: [Genre.HORROR],
		poster: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Malum_%282023%29_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3742',
		title: 'The Super Mario Bros. Movie',
		description:
			"The Super Mario Bros. Movie is a 2023 American computer-animated adventure film based on Nintendo's Mario video game franchise. Produced by Illumination, Universal Pictures, and Nintendo, and distributed by Universal, it was directed by Aaron Horvath and Michael Jelenic from a screenplay by Matthew Fogel. The ensemble voice cast includes Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black, Keegan-Michael Key, Seth Rogen, and Fred Armisen. The film features an origin story for the brothers Mario and Luigi, Italian-American plumbers who are transported to an alternate world and become entangled in a battle between the Mushroom Kingdom, led by Princess Peach, and the Koopas, led by Bowser.",
		releaseYear: 2023,
		genre: [Genre.ACTION],
		poster: 'https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3743',
		title: 'Air',
		description:
			'Air is a 2023 American biographical sports drama film directed by Ben Affleck from a screenplay written by Alex Convery. It is based on true events about the origin of Air Jordan, a basketball shoeline, of which a Nike employee seeks to strike a business deal with rookie player Michael Jordan. The film stars Matt Damon, Affleck, Jason Bateman, Marlon Wayans, Chris Messina, Chris Tucker, and Viola Davis.',
		releaseYear: 2023,
		genre: [Genre.DRAMA],
		poster: 'https://upload.wikimedia.org/wikipedia/en/d/de/AirFilmPoster.png'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3744',
		title: 'Praise This',
		description:
			'Praise This is a 2023 American musical comedy film directed by Tina Gordon and starring Chloe Bailey and Anjelika Washington.',
		releaseYear: 2023,
		genre: [Genre.COMEDY],
		poster: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Praise_This_poster.jpg'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3745',
		title: 'Showing Up',
		description:
			'Showing Up is a 2023 American comedy-drama film co-written and directed by Kelly Reichardt, in her fourth collaboration with actress Michelle Williams.',
		releaseYear: 2023,
		genre: [Genre.COMEDY, Genre.DRAMA],
		poster: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Showing_Up_(film)_poster.png'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3746',
		title: 'Paint',
		description:
			'Paint is a 2023 American comedy film written and directed by Brit McAdams. The film stars Owen Wilson, Michaela Watkins, Wendi McLendon-Covey, Ciara Renée, Lucy Freyer, Lusia Strus, and Michael Pemberton.',
		releaseYear: 2023,
		genre: [Genre.COMEDY],
		poster: 'https://upload.wikimedia.org/wikipedia/en/5/59/Paint_Poster.png'
	},
	{
		id: '2ac4f543-ddb0-408d-8c7d-cee00b8d3747',
		title: 'On a Wing and a Prayer',
		description:
			'On a Wing and a Prayer is a 2023 American biographical survival film directed by Sean McNamara and starring Dennis Quaid, Heather Graham, and Jesse Metcalfe. It was released on April 7, 2023.',
		releaseYear: 2023,
		genre: [Genre.THRILLER],
		poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/On_a_Wing_and_a_Prayer_poster.jpg'
	}
]
