
CREATE TABLE IF NOT EXISTS `client_signal_random` (
  `id` int(11) NOT NULL DEFAULT '0',
  `signal_value` varchar(16) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL COMMENT 'Name of the Row',
  `chance` decimal(6,1) NOT NULL COMMENT 'Prob. of value in current row',
  `location` decimal(6,1) NOT NULL COMMENT 'Cumulative value of chance',
  `interval` float NOT NULL COMMENT 'Delay time in the row -- in seconds'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client_signal_random`
--

INSERT INTO `client_signal_random` (`id`, `signal_value`, `chance`, `location`, `interval`) VALUES
(1, '100_ABOVE', 0.5, 0.5, 1),
(2, '90_ABOVE', 2.5, 3.0, 1),
(3, '80_ABOVE', 48.0, 51.0, 1),
(4, '70_ABOVE', 72.0, 123.0, 1),
(5, '60_ABOVE', 144.0, 267.0, 1),
(6, '50', 85866.0, 81633.0, 1),
(7, '60_BELOW', 144.0, 86277.0, 1),
(8, '70_BELOW', 72.0, 86349.0, 1),
(9, '80_BELOW', 48.0, 86397.0, 1),
(10, '90_BELOW', 2.5, 86399.5, 1),
(11, '100_BELOW', 0.5, 86400.0, 1);
