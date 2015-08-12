
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [EnumKey("Gimnet.Sertifika.DenetlemeDurumIds"), PreserveMemberCase]
    public enum DenetlemeDurumIds
    {
        None = 0,
        SorunsuzYapildi = 1,
        FirmaKabulEtmedi = 2,
        KusurlarBulundu = 3,
        İptalEdildi = 4
    }
    
}

