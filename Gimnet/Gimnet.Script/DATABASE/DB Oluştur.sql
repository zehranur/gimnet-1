USE [Gimnet_Default_v1]
GO

/****** Object:  Table [dbo].[Duyuru]    Script Date: 27.7.2015 22:54:31 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Duyuru](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Baslik] [nchar](100) NOT NULL,
	[EklemeTarihi] [datetime] NOT NULL,
	[DuyuruMetni] [nvarchar](max) NOT NULL,
	[SonTarih] [datetime] NULL,
 CONSTRAINT [PK_Duyuru] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO



/****** Object:  Table [dbo].[Firma]    Script Date: 27.7.2015 22:54:37 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Firma](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirmaAdi] [nchar](100) NOT NULL,
	[KucukLogo] [nchar](256) NULL,
	[OrtaLogo] [nchar](256) NULL,
	[BuyukLogo] [nchar](256) NOT NULL,
	[KonumSehir] [nchar](100) NOT NULL,
	[Telefon] [nchar](20) NULL,
	[WebSayfasi] [nchar](50) NULL,
	[IletisimEmail] [nchar](50) NULL,
	[Durum] [int] NOT NULL,
 CONSTRAINT [PK_Firma] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Firmanın GIMDES nezdindeki durumunu gösterir. None=0, Normal=1, Calisilmaz=2,...' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Firma', @level2type=N'COLUMN',@level2name=N'Durum'
GO



/****** Object:  Table [dbo].[HelalMarket]    Script Date: 27.7.2015 22:54:43 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HelalMarket](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Adi] [nchar](100) NOT NULL,
	[AcikAdres] [nchar](256) NOT NULL,
	[AdresAciklama] [nchar](256) NULL,
	[SorumluKisi] [nchar](100) NULL,
	[Telefon1] [nchar](20) NULL,
	[Telefon2] [nchar](20) NULL,
	[Koordinat] [nchar](100) NULL,
	[EklemeTarihi] [smalldatetime] NULL,
	[GuncellemeTarihi] [smalldatetime] NULL,
	[Il] [int] NOT NULL,
	[Ilce] [nchar](100) NOT NULL,
 CONSTRAINT [PK_HelalMarket] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Market adı' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'HelalMarket', @level2type=N'COLUMN',@level2name=N'Adi'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Marketin açık adresi. sadeca adres bilgisi yazın' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'HelalMarket', @level2type=N'COLUMN',@level2name=N'AcikAdres'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Adresin bulunmasını kolaylaştırmak için gereken açıklama. Örn: Falan caminin arkasında...' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'HelalMarket', @level2type=N'COLUMN',@level2name=N'AdresAciklama'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Market sorumlusu' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'HelalMarket', @level2type=N'COLUMN',@level2name=N'SorumluKisi'
GO



/****** Object:  Table [dbo].[HelalSertifika]    Script Date: 27.7.2015 22:54:49 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[HelalSertifika](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[KategoriId] [int] NOT NULL,
	[FirmaId] [int] NOT NULL,
	[Marka] [nchar](100) NOT NULL,
	[İlkBasvuruTarihi] [smalldatetime] NOT NULL,
	[YenilemeTarihi] [smalldatetime] NOT NULL,
	[SertifikaKapsami] [nvarchar](max) NOT NULL,
	[Durum] [int] NOT NULL,
	[KapsamDisi] [nvarchar](max) NULL,
	[BitisTarihi] [smalldatetime] NULL,
	[İptalAciklamasi] [nchar](256) NULL,
	[SertifikaResimleri] [nvarchar](max) NULL,
	[SertifikaNo] [nchar](20) NULL,
 CONSTRAINT [PK_HelalSertifika] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

/****** Object:  Table [dbo].[Kategori]    Script Date: 27.7.2015 22:54:54 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Kategori](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[KategoriAdi] [nchar](100) NOT NULL,
	[EklenmeTarihi] [smalldatetime] NOT NULL,
 CONSTRAINT [PK_Kategori] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Kategori adı, Helal kelimesi kullanmayın.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Kategori', @level2type=N'COLUMN',@level2name=N'KategoriAdi'
GO



/****** Object:  Table [dbo].[Sertifika]    Script Date: 27.7.2015 22:55:02 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Sertifika](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Firma] [nvarchar](100) NOT NULL,
	[Marka] [nvarchar](100) NOT NULL,
	[Model] [nvarchar](100) NULL,
	[Detay] [nvarchar](4) NOT NULL,
	[Tarih] [datetime] NOT NULL,
	[IsActive] [smallint] NOT NULL,
 CONSTRAINT [PK_Sertifika] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


/****** Object:  Table [dbo].[SertifikaResimleri]    Script Date: 27.7.2015 22:55:08 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[SertifikaResimleri](
	[Id] [int] NOT NULL,
	[ResimKonumu] [nchar](256) NOT NULL,
	[EklenmeTarihi] [smalldatetime] NOT NULL,
	[SertifikaId] [int] NOT NULL,
	[GecerlilikTarihiBaslangic] [smalldatetime] NOT NULL,
	[GecerlilikTarihiBitis] [smalldatetime] NOT NULL,
 CONSTRAINT [PK_SertifikaResimleri] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

USE [Gimnet_Default_v1]
GO

/****** Object:  Table [dbo].[Barkod]    Script Date: 28.7.2015 23:37:17 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Barkod](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SertifikaId] [int] NOT NULL,
	[Barkod] [nchar](25) NOT NULL,
	[UrunAdi] [nchar](256) NOT NULL
) ON [PRIMARY]

GO

GO

CREATE TABLE [dbo].[DenetlemeTakvimi](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirmaId] [int] NOT NULL,
	[DenetlemeTarihi] [smalldatetime] NOT NULL,
	[Denetciler] [nvarchar](1000) NOT NULL,
	[Durumu] [int] NOT NULL,
	[Sonuc] [nvarchar](max) NOT NULL,
	[PlanananTarih] [smalldatetime] NOT NULL,
 CONSTRAINT [PK_DenetlemeTakvimi] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [dbo].[DenetlemeTakvimi]  WITH CHECK ADD  CONSTRAINT [FK_DenetlemeTakvimi_Firma] FOREIGN KEY([FirmaId])
REFERENCES [dbo].[Firma] ([Id])
GO

ALTER TABLE [dbo].[DenetlemeTakvimi] CHECK CONSTRAINT [FK_DenetlemeTakvimi_Firma]
GO




ALTER TABLE [dbo].[Barkod]  WITH CHECK ADD  CONSTRAINT [FK_Barkod_HelalSertifika] FOREIGN KEY([SertifikaId])
REFERENCES [dbo].[HelalSertifika] ([Id])
GO

ALTER TABLE [dbo].[Barkod] CHECK CONSTRAINT [FK_Barkod_HelalSertifika]
GO



ALTER TABLE [dbo].[SertifikaResimleri]  WITH CHECK ADD  CONSTRAINT [FK_SertifikaResimleri_HelalSertifika] FOREIGN KEY([SertifikaId])
REFERENCES [dbo].[HelalSertifika] ([Id])
GO

ALTER TABLE [dbo].[SertifikaResimleri] CHECK CONSTRAINT [FK_SertifikaResimleri_HelalSertifika]
GO



ALTER TABLE [dbo].[HelalSertifika]  WITH CHECK ADD  CONSTRAINT [FK_HelalSertifika_Firma] FOREIGN KEY([FirmaId])
REFERENCES [dbo].[Firma] ([Id])
GO

ALTER TABLE [dbo].[HelalSertifika] CHECK CONSTRAINT [FK_HelalSertifika_Firma]
GO

ALTER TABLE [dbo].[HelalSertifika]  WITH CHECK ADD  CONSTRAINT [FK_HelalSertifika_Kategori] FOREIGN KEY([KategoriId])
REFERENCES [dbo].[Kategori] ([Id])
GO

ALTER TABLE [dbo].[HelalSertifika] CHECK CONSTRAINT [FK_HelalSertifika_Kategori]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Sertifika durumu: None=0, Gecerli=1, ZamanAsimi(Yenilenmedi)=2, Yenlenmeyecek=3,İptal=4' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'HelalSertifika', @level2type=N'COLUMN',@level2name=N'Durum'
GO



ALTER TABLE [dbo].[Sertifika] ADD  CONSTRAINT [DF_Sertifika_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO



