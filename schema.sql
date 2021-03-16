-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Product '
-- 
-- ---

DROP TABLE IF EXISTS `Product `;
		
CREATE TABLE `Product ` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` VARCHAR NULL DEFAULT '""',
  `Slogan` VARCHAR NULL DEFAULT '""',
  `Discription` VARCHAR NULL DEFAULT '""',
  `Category` VARCHAR NULL DEFAULT NULL,
  `Price` VARCHAR NULL DEFAULT '0',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Style'
-- 
-- ---

DROP TABLE IF EXISTS `Style`;
		
CREATE TABLE `Style` (
  `id` VARCHAR NULL AUTO_INCREMENT DEFAULT NULL,
  `Name` VARCHAR NULL DEFAULT NULL,
  `original_price` VARCHAR NULL DEFAULT NULL,
  `sale_price` VARCHAR NULL DEFAULT NULL,
  `default` bit NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Features'
-- 
-- ---

DROP TABLE IF EXISTS `Features`;
		
CREATE TABLE `Features` (
  `id_product` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Feature` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY ()
);

-- ---
-- Table 'Results'
-- 
-- ---

DROP TABLE IF EXISTS `Results`;
		
CREATE TABLE `Results` (
  `Style` VARCHAR NULL DEFAULT NULL,
  `id_Product ` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY ()
);

-- ---
-- Table 'Photos'
-- 
-- ---

DROP TABLE IF EXISTS `Photos`;
		
CREATE TABLE `Photos` (
  `id` INTEGER NULL DEFAULT NULL,
  `id_Photo` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'SKU's'
-- 
-- ---

DROP TABLE IF EXISTS `SKU's`;
		
CREATE TABLE `SKU's` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_SKU` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'related products'
-- 
-- ---

DROP TABLE IF EXISTS `related products`;
		
CREATE TABLE `related products` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_related product` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Feature'
-- 
-- ---

DROP TABLE IF EXISTS `Feature`;
		
CREATE TABLE `Feature` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `value` VARCHAR NULL DEFAULT NULL,
  `Feature` CHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Photo'
-- 
-- ---

DROP TABLE IF EXISTS `Photo`;
		
CREATE TABLE `Photo` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `url` VARCHAR NULL DEFAULT NULL,
  `thumbnail_url` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'SKU'
-- 
-- ---

DROP TABLE IF EXISTS `SKU`;
		
CREATE TABLE `SKU` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `quantity ` INTEGER NULL DEFAULT NULL,
  `size` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'related product'
-- 
-- ---

DROP TABLE IF EXISTS `related product`;
		
CREATE TABLE `related product` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Cart'
-- 
-- ---

DROP TABLE IF EXISTS `Cart`;
		
CREATE TABLE `Cart` (
  `sku` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `quantity ` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`sku`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Product ` ADD FOREIGN KEY (id) REFERENCES `related products` (`id`);
ALTER TABLE `Style` ADD FOREIGN KEY (id) REFERENCES `Photos` (`id`);
ALTER TABLE `Features` ADD FOREIGN KEY (id_product) REFERENCES `Product ` (`id`);
ALTER TABLE `Features` ADD FOREIGN KEY (id_Feature) REFERENCES `Feature` (`id`);
ALTER TABLE `Results` ADD FOREIGN KEY (Style) REFERENCES `Style` (`id`);
ALTER TABLE `Results` ADD FOREIGN KEY (id_Product ) REFERENCES `Product ` (`id`);
ALTER TABLE `Photos` ADD FOREIGN KEY (id_Photo) REFERENCES `Photo` (`id`);
ALTER TABLE `SKU's` ADD FOREIGN KEY (id) REFERENCES `Style` (`id`);
ALTER TABLE `SKU's` ADD FOREIGN KEY (id_SKU) REFERENCES `SKU` (`id`);
ALTER TABLE `SKU's` ADD FOREIGN KEY (id_SKU) REFERENCES `Cart` (`sku`);
ALTER TABLE `related products` ADD FOREIGN KEY (id_related product) REFERENCES `related product` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Product ` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Style` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Results` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `SKU's` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `related products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Feature` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Photo` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `SKU` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `related product` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Cart` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Product ` (`id`,`Name`,`Slogan`,`Discription`,`Category`,`Price`) VALUES
-- ('','','','','','');
-- INSERT INTO `Style` (`id`,`Name`,`original_price`,`sale_price`,`default`) VALUES
-- ('','','','','');
-- INSERT INTO `Features` (`id_product`,`id_Feature`) VALUES
-- ('','');
-- INSERT INTO `Results` (`Style`,`id_Product `) VALUES
-- ('','');
-- INSERT INTO `Photos` (`id`,`id_Photo`) VALUES
-- ('','');
-- INSERT INTO `SKU's` (`id`,`id_SKU`) VALUES
-- ('','');
-- INSERT INTO `related products` (`id`,`id_related product`) VALUES
-- ('','');
-- INSERT INTO `Feature` (`id`,`value`,`Feature`) VALUES
-- ('','','');
-- INSERT INTO `Photo` (`id`,`url`,`thumbnail_url`) VALUES
-- ('','','');
-- INSERT INTO `SKU` (`id`,`quantity `,`size`) VALUES
-- ('','','');
-- INSERT INTO `related product` (`id`) VALUES
-- ('');
-- INSERT INTO `Cart` (`sku`,`quantity `) VALUES
-- ('','');
