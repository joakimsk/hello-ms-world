-- Exported by joakimsk at 19-03-2021 01:09.
-- WARNING: This file may contain descructive statements such as DROPs.
-- Please ensure that you are running the script at the proper location.

-- BEGIN TABLE dbo.helloworld
IF OBJECT_ID('dbo.helloworld', 'U') IS NOT NULL
DROP TABLE dbo.helloworld;
GO

CREATE TABLE dbo.helloworld (
	phrase text NULL
);
GO

-- Inserting 5 rows into dbo.helloworld
-- Insert batch #1
INSERT INTO dbo.helloworld (phrase) VALUES
('Yo dude'),
('No dude'),
('A lot of more data here, yes.'),
('Who would have known, Node.js + MS SQL on a Windows-server as an app?'),
('This must be the 21st century.');

-- END TABLE dbo.helloworld