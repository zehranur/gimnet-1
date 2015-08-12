using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace Gimnet.Sertifika
{
    [ScriptInclude]
    public enum DenetlemeDurumIds : long
    {
        [Description("Seçiniz")]
        None = 0,
        [Description("Sorunsuz Yapıldı")]
        SorunsuzYapildi,
        [Description("Firma Kabul Etmedi")]
        FirmaKabulEtmedi,
        [Description("Kusurlar Bulundu")]
        KusurlarBulundu,
        [Description("Sertifika İptal Edildi")]
        İptalEdildi
    }
}