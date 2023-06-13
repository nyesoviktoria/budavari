DROP TABLE IF EXISTS `records`;
DROP TABLE IF EXISTS `albums`;
DROP TABLE IF EXISTS `upcoming-concerts`;
DROP TABLE IF EXISTS `previous-concerts`;
DROP TABLE IF EXISTS `gallery_folders`;
DROP TABLE IF EXISTS `images`;

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
  ('concert-desktop', 'concert-mobile', 'nyári éjszaka', 'Szentivánéji muzsika', '2023. június 24., 18:00', '2023-06-24T17:00', 90, 'Albertfalvi Közösségi Ház', 'Szeretettel várunk mindenkit évadzáró koncertünkön az Albertfalvi Közösségi házban, ahol részletek hangzanak el többek között Purcell, Händel, Telemann, Mendelssohn, Sibelius, Gershwin és Grieg műveiből.', 'meghivo', 'https://goo.gl/maps/QdmsUAzmSADgBq4a6', null);

CREATE TABLE `previous_concerts` (
  `id` tinyint NOT NULL AUTO_INCREMENT,
  `date` varchar(30) ,
  `location` varchar(40),
  `url` varchar(150) ,
  `videoSource` varchar(20) ,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

INSERT INTO `previous_concerts` (`id`, `date`, `location`, `url`, `videoSource`) VALUES
(1, '2022. december 17.', 'Deák Téri Gimnázium', 'https://youtube.com/playlist?list=PLFHt78hGynFlYLnJbUotQF043nBPaWHYg', '20221217'),
(2, '2022. július 9.', 'Keszthely', 'https://youtube.com/playlist?list=PLFHt78hGynFlbOsj3aPcN1A6ot7eHtZom', '20220709'),
(3, '2022. május 15.', 'ELTE Aula Magna', 'https://youtube.com/playlist?list=PLFHt78hGynFmoVwtgzBstR4A0TJNItmnf', '20220515'),
(4, '2022. február 27.', 'Festetics Palota', 'https://youtube.com/playlist?list=PLFHt78hGynFm4jUgOOARSH2yQBG8-laQV', '20220227'),
(5, '2021. július 24.', 'Keszthely', 'https://youtube.com/playlist?list=PLFHt78hGynFkTWWRE2PjscfClZ6AyIqwO', '20210724'),
(6, '2019. június 23.', 'ELTE Aula Magna', 'https://youtube.com/playlist?list=PLFHt78hGynFnQ8jBIjaICBPwA_b5mjeXK', '20190623');


CREATE TABLE `gallery_folders` (
  `FolderId` INT NOT NULL AUTO_INCREMENT,
  `FolderTitle` VARCHAR(256),
  `FolderDateCode`: VARCHAR(32),
  `PhotographerName` VARCHAR(128),
  `Added` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   PRIMARY KEY (`FolderId`)
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

INSERT INTO `gallery_folders` (`FolderTitle`, `FolderDateCode`, `PhotographerName`) VALUES
('2022. december 17., Deák Téri Evangélikus Gimnázium', '20221217', 'Stépán Virág'),
('2022. május 15., ELTE', '20220515', 'Stépán Virág'),
('2019. június 23., ELTE', '20190623', 'Werner András');


CREATE TABLE `images` (
  `ImageId` INT NOT NULL AUTO_INCREMENT,
  `FolderId` INT,
  `ImageSource` VARCHAR(128),
  `IsVertical` BOOLEAN,
  `Added` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   PRIMARY KEY (`ImageId`)
) ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

INSERT INTO `images` (`FolderId`, `ImageSource`, `IsVertical`) VALUES
(1, '2022.12.17.img01', false),
(1, '2022.12.17.img02', true),
(1, '2022.12.17.img03', true),
(1, '2022.12.17.img04', false),
(1, '2022.12.17.img05', false),
(1, '2022.12.17.img06', true),
(1, '2022.12.17.img07', false),
(1, '2022.12.17.img08', false),
(1, '2022.12.17.img09', false),
(1, '2022.12.17.img10', false),
(1, '2022.12.17.img11', true),
(1, '2022.12.17.img12', false),
(1, '2022.12.17.img13', false),
(1, '2022.12.17.img14', false),
(1, '2022.12.17.img15', true),
(1, '2022.12.17.img16', false),
(1, '2022.12.17.img17', false),
(1, '2022.12.17.img18', false),
(1, '2022.12.17.img19', true),
(1, '2022.12.17.img20', true),
(1, '2022.12.17.img21', true),
(1, '2022.12.17.img22', true),
(1, '2022.12.17.img23', false),
(1, '2022.12.17.img24', false),
(1, '2022.12.17.img25', true),
(1, '2022.12.17.img26', false),
(1, '2022.12.17.img27', false),
(1, '2022.12.17.img28', false),
(1, '2022.12.17.img29', false),
(1, '2022.12.17.img30', true),
(1, '2022.12.17.img31', true),
(1, '2022.12.17.img32', false),
(1, '2022.12.17.img33', false),
(1, '2022.12.17.img34', false),
(1, '2022.12.17.img35', false),
(1, '2022.12.17.img36', true),
(2, '2022.05.15.img01', false),
(2, '2022.05.15.img02', false),
(2, '2022.05.15.img03', false),
(2, '2022.05.15.img04', false),
(2, '2022.05.15.img05', true),
(2, '2022.05.15.img06', false),
(2, '2022.05.15.img07', false),
(2, '2022.05.15.img08', true),
(2, '2022.05.15.img09', false),
(2, '2022.05.15.img10', true),
(2, '2022.05.15.img11', true),
(2, '2022.05.15.img12', true),
(2, '2022.05.15.img13', true),
(2, '2022.05.15.img14', false),
(2, '2022.05.15.img15', false),
(2, '2022.05.15.img16', false),
(2, '2022.05.15.img17', false),
(2, '2022.05.15.img18', false),
(2, '2022.05.15.img19', true),
(2, '2022.05.15.img20', false),
(2, '2022.05.15.img21', false),
(2, '2022.05.15.img22', false),
(2, '2022.05.15.img23', false),
(2, '2022.05.15.img24', false),
(2, '2022.05.15.img25', false),
(2, '2022.05.15.img26', false),
(2, '2022.05.15.img27', false),
(2, '2022.05.15.img28', false),
(2, '2022.05.15.img29', false),
(2, '2022.05.15.img30', true),
(3, '2019.06.23.img01', false),
(3, '2019.06.23.img02', false),
(3, '2019.06.23.img03', true),
(3, '2019.06.23.img04', false),
(3, '2019.06.23.img05', true),
(3, '2019.06.23.img06', true),
(3, '2019.06.23.img07', false),
(3, '2019.06.23.img08', true),
(3, '2019.06.23.img09', false),
(3, '2019.06.23.img10', true),
(3, '2019.06.23.img11', false),
(3, '2019.06.23.img12', false),
(3, '2019.06.23.img13', true),
(3, '2019.06.23.img14', false),
(3, '2019.06.23.img15', true),
(3, '2019.06.23.img16', false),
(3, '2019.06.23.img17', false),
(3, '2019.06.23.img18', false),
(3, '2019.06.23.img19', false),
(3, '2019.06.23.img20', true);





