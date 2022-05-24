-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2022 at 09:30 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@book.com', '$2a$08$ia5.19UFK1K4VrwIrnEUbe9yWS3/ZxvUs2.g6kEpB96qGvKhDx8ZS', '2022-05-23 03:43:00', '2022-05-23 03:43:00');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `categoryName` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `categoryName`, `createdAt`, `updatedAt`) VALUES
(16, 'Comics', '2022-05-23 15:39:17', '2022-05-23 15:39:17'),
(17, 'Fantasy', '2022-05-23 15:39:28', '2022-05-23 15:39:28'),
(18, 'Horror', '2022-05-23 15:39:33', '2022-05-23 15:39:33'),
(19, 'Adventure', '2022-05-23 15:39:41', '2022-05-23 15:39:41'),
(20, 'Novels', '2022-05-23 15:39:49', '2022-05-23 15:39:49'),
(21, '~~~~~~Test!! Delete me', '2022-05-24 06:05:18', '2022-05-24 06:05:18'),
(22, '~~~~~~Another Test !!! Delete only me.', '2022-05-24 06:06:12', '2022-05-24 06:06:12');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `caption` varchar(255) NOT NULL,
  `price` double DEFAULT '0',
  `quantity` int(11) DEFAULT '0',
  `description` text NOT NULL,
  `rating` double DEFAULT '0',
  `img` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `categoryId`, `caption`, `price`, `quantity`, `description`, `rating`, `img`, `createdAt`, `updatedAt`) VALUES
(10, 16, 'Harry Hotter', 13, 162, 'ds fds sd sd', 0, 'public/logos/img-6.jpg', '2022-05-24 00:46:44', '2022-05-24 07:21:39'),
(11, 19, 'sdfdsfdsfsdf', 1, 1, 'ew wefwe ', 0, 'public/logos/img-5.jpg', '2022-05-24 01:57:06', '2022-05-24 05:59:05'),
(13, 20, 'cd  w cew cew cw w', 3, 3, 'erf r er rfv re v ', 0, 'public/logos/500-error.png', '2022-05-24 02:20:01', '2022-05-24 02:20:01'),
(14, 18, 'Harry Hotter', 2.2, 3, '23', 0, 'public/logos/img-2.jpg', '2022-05-24 02:21:08', '2022-05-24 05:57:23'),
(15, 16, 'Harry Hotter', 123, 1, 'sd wq dqqw', 0, 'public/logos/500-error.png', '2022-05-24 02:30:17', '2022-05-24 02:30:17'),
(16, 18, 'My Testt', 2.23, 12, '12312d dwe', 0, 'public/logos/bookstore.png', '2022-05-24 02:41:31', '2022-05-24 03:04:15'),
(17, 17, 'sdfdsfdsfsdf', 2.3, 2, 'wef w', 0, 'public/logos/500-error.png', '2022-05-24 03:05:23', '2022-05-24 03:05:23'),
(18, 17, 'wed', 2.3, 23, ' fwewe we', 0, 'public/logos/coming-soon-img.png', '2022-05-24 03:07:24', '2022-05-24 03:07:24'),
(19, 19, 'General', 23, 2, ' cv wvw vweavv ', 0, 'public/logos/img-1.jpg', '2022-05-24 06:01:12', '2022-05-24 06:01:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
