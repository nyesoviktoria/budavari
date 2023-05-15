DROP TABLE IF EXISTS `records`;
DROP TABLE IF EXISTS `albums`;
DROP TABLE IF EXISTS `upcoming-concerts`;

CREATE TABLE `records` (
  `RecordId` INT NOT NULL AUTO_INCREMENT,
  `AlbumId` INT,
  `TrackSource` VARCHAR(128),
  `RecordTitle` VARCHAR(128),
  `SoloistName` VARCHAR(128) DEFAULT NULL,
  PRIMARY KEY (`RecordId`)
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

INSERT INTO `records` (`AlbumId`, `TrackSource`, `RecordTitle`, `SoloistName`) VALUES
  ('1', 'saba_short', 'Georg Friedrich Handel - Sába királynőjének bevonulása (részlet a Salamon című oratóriumból)', NULL),
	('1', 'bach_short', 'Johann Sebastian Bach - D-dúr zongoraverseny (BWV 1058, I. tétel)', 'Király Miklós'),
	('1', 'vedró_short', 'Antonio Vivaldi - Vedró con mio diletto ária (részlet a Giustino című operából)', 'Nagy Anna'),
	('1', 'scaramouches_short', 'Georg Philipp Telemann - La Changeante szvit vonósokra (TWV 55.g2, III. tétel, Les Scaramouches)', NULL),
	('1', 'avec_douceur_short', 'Georg Philipp Telemann - La Changeante szvit vonósokra (TWV 55.g2, VII. tétel, Avec douceur)', NULL),
	('1', 'vivaldi_g-moll_short', 'Antonio Vivaldi - g-moll concerto (RV 156, III. tétel, Allegro)', NULL),
	('1', 'herschel_short', 'William Herschel - c-moll szimfónia (No. 8., I. tétel Allegro assai)', NULL),
	('1', 'barbarina_short', 'Wolfgang Amadeus Mozart - Barbarina kavatinája (részlet a Figaro házassága című operából)', 'Dömötör Emőke'),
	('1', 'haydn_short', 'Joseph Haydn - d-moll vonósnégyes (Op. 42, IV. tétel, Finale - Presto)', NULL),
	('1', 'solvejg_short', 'Edvard Grieg - Solvejg dala (részlet a Peer Gynt című kísérőzenéből)', 'Horváth Mária'),
	('1', 'erklarungen_short', 'Robert Schumann-Héja Benedek - Erklarungen (IV. tétel)', NULL),
	('1', 'fauré_short', 'Gabriel Fauré-Héja Benedek - Après un rêve (Álom után, op.7, No. 1)', 'Horváth Cecília'),
	('1', 'britten_short', 'Benjamin Britten - Simple Symphony (IV. tétel, Frolicsome Finale)', NULL),
	('1', 'greensleeves_short', 'Ralph Vaughan Williams - Fantasia on Greensleeves', NULL),
	('1', 'naked_song_short', 'Héja Benedek - Naked song (as a doll)', NULL),
	('2', 'vivaldi_concerto_short', 'Antonio Vivaldi - C-dúr concerto, RV 115', NULL),
	('2', 'consummatum_est_short', 'Joseph Haydn - Krisztus hét szava a keresztfán - Consummatum est', NULL),
	('2', 'italiana_short', 'Ottorino Respihi - Italiana', NULL),
	('2', 'laura_soave_short', 'Ottorino Respihi - Laura soave', NULL),
	('2', 'balletto_detto_short', 'Ottorino Respihi - Balletto detto il conte Orlando', NULL),
	('2', 'sugar_short', 'Sugár Rezső - Rondo', 'Koós Eszter'),
	('2', 'telemann_short', 'Georg Philipp Telemann - Rigaudon', NULL),
	('2', 'chaconne_short', 'Henry Purcell - Chaconne', NULL),
	('2', 'morgen_short', 'Richard Strauss - Morgen', 'Kertész Szilvia, Nánay Mihály'),
	('2', 'rameau_short', 'Jean-Philippe Rameau - Rondeau des Indes Galantes', NULL),
	('2', 'sosztakovics_short', 'Dmitrij Dmitrijevics Sosztakovics - II. zongoraverseny, Op. 102 - Andante', 'Koós Eszter'),
	('2', 'sibelius_short', 'Jean Sibelius - Andante Festivo', NULL),
	('2', 'furulyaverseny_short', 'Antonio Vivaldi - C-dúr furulyaverseny, RV 443', 'Trautsch Ildikó'),
	('2', 'basse_danse_short', 'Peter Warlock - Capriol Suite, Basse-Danse', NULL),
	('2', 'pavane_short', 'Peter Warlock - Capriol Suite, Pavane', NULL),
	('2', 'holst_short', 'Holst - Szent Pál szvit, I. Jig', NULL),
	('2', 'lemezanyag_short', 'Héja Benedek - Lemezanyag', NULL),
	('2', 'janacek_short', 'Leoš Janáček - Két tánc', NULL);

CREATE TABLE `albums` (
  `AlbumId` INT(1) NOT NULL AUTO_INCREMENT,
  `AlbumTitle` VARCHAR(128),
  `CoverImageSource` VARCHAR(128),
  `CoverImageAltText` VARCHAR(128),
  `Description` VARCHAR(256),
  `AlbumName` VARCHAR(128),
  PRIMARY KEY (`AlbumId`)
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

INSERT INTO `albums` (`AlbumTitle`, `CoverImageSource`, `CoverImageAltText`, `Description`, `AlbumName`) VALUES
  ('Jubileumi lemez a zenekar fennállásának 10. évfordulója alkalmából', '10borito', 'A zenekar 2. lemezének borítóképe', '2020 januárjában és augusztusában rögzítettük második lemezünk anyagát. A műveket az első CD felvétele óta eltelt időszakban játszott, szívünkhöz közel álló darabok közül válogattunk. Hangmérnök és digitális utómunka: Rédly Dénes.', 'TENTH_JUBILEUM'),
  ('Jubileumi lemez a zenekar fennállásának 5. évfordulója alkalmából', '5borito', 'A zenekar 1. lemezének borítóképe', 'A felvétel a Szent Benedek Iskolaközpont dísztermében készült 2013. augusztusában a zenekar fennállásának 5. évfordulója alkalmából. Hangmérnök és digitális utómunka: Rédly Dénes.', 'FIFTH_JUBILEUM');

CREATE TABLE `upcoming_concerts` (
  `ConcertId` INT NOT NULL AUTO_INCREMENT,
  `ImageDesktopSource` VARCHAR(128),
  `ImageMobileSource` VARCHAR(128),
  `ImageAltText` VARCHAR(128),
  `ConcertTitle` VARCHAR(128),
  `ConcertDate` VARCHAR(128),
  `ConcertDateCode` VARCHAR(128),
  `ConcertLengthInMinutes` INT,
  `ConcertLocation` VARCHAR(128),
  `ConcertDescription` VARCHAR(512),
  `ConcertInviteImageSource` VARCHAR(128) DEFAULT NULL,
  `ConcertLocationMapUrl` VARCHAR(128) DEFAULT NULL,
  `ConcertFacebookEventUrl` VARCHAR(128) DEFAULT NULL,
  `Added` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ConcertId`)
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

INSERT INTO `upcoming_concerts` (`ImageDesktopSource`, `ImageMobileSource`, `ImageAltText`, `ConcertTitle`, `ConcertDate`, `ConcertDateCode`, `ConcertLengthInMinutes`, `ConcertLocation`, `ConcertDescription`, `ConcertInviteImageSource`, `ConcertLocationMapUrl`, `ConcertFacebookEventUrl`) VALUES
  ('szegedi-dom-desktop', 'szegedi-dom-mobile', 'szegedi dóm kupolája', 'Koncert a Szegedi Dómban', '2023. május 27., 18:00', '2023-05-27T17:00', 60, 'Szeged Dóm tér 15, 6720', 'Nem először látja vendégül zenekarunkat a Szegedi Dóm, a Lassus Énekegyüttes és Varjasi Gyula karnagy. Együttműködéseink során szinte már hagyománnyá vált, hogy a szentmise keretében Mozart valamelyik missa brevisét - ez alkalommal a Spatzen Messe-t (KV 220) - adjuk elő. ', 'mozart', 'https://goo.gl/maps/23nARtjyrZbkHcto6?coh=178572&entry=tt', null),
  ('szegedi-dom-desktop', 'szegedi-dom-mobile', 'Jézus keresztrefeszítését ábrázoló üvegablak', 'Koncert a Szegedi Dómban', '2023. május 27., 19:00', '2023-05-27T18:00', 60, 'Szeged Dóm tér 15, 6720', 'A mise után a kórussal közös koncertünkön Pergolesi csodálatos Stabat Materét hallhatja a közönség. ', 'mozart', 'https://goo.gl/maps/23nARtjyrZbkHcto6?coh=178572&entry=tt', null);
