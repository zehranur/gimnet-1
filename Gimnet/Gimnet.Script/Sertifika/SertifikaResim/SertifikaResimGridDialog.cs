namespace Gimnet.Sertifika.SertifikaResim
{
    using System;
    using jQueryApi;
    using jQueryApi.UI.Widgets;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id")]
    public class SertifikaResimGridDialog : TemplatedDialog
    {
        public HelalSertifikaRow Sertifika { get; set; }
        public SertifikaResimGrid SertifikaResimGrid { get; set; }
         
        public SertifikaResimGridDialog()
        {
            //ById("GridDiv").Height(359).FlexHeightOnly();
            SertifikaResimGrid = new SertifikaResimGrid(ById("GridDiv"));
        }

        //protected override void InitDialog()
        //{
        //    base.InitDialog();

        //    this.element.DialogFlexify()
        //        .DialogResizable(w: 875, h: 400, mw: 700, mh: 400)
        //        .DialogMaximizable();
        //}

        protected override void OnDialogOpen()
        {
            base.OnDialogOpen();

            J(".ui-widget-overlay.ui-front").Last().CSS("opacity", "0.5");
        }

        protected override List<ToolButton> GetToolbarButtons()
        {
            return new List<ToolButton>();
        }

        protected override DialogOptions GetDialogOptions()
        {
            var dialogOptions = base.GetDialogOptions();
            dialogOptions.Resizable = true;
            return dialogOptions;
        }

        protected override string GetTemplateName()
        {
            return "GridDialog";
        }

        public void UpdateTitle()
        {
            if (this.Sertifika == null)
                return;

            element.Dialog().Title = "Başlık buaraya gelecek";// string.Format("Diğer Sosyal Güvenlik ({0} - {1})", Personel.AdiSoyadi, Personel.KimlikNo);
        }


        public void LoadByIdAndOpenDialog(Int32 sertifikaID)
        {
            this.SertifikaID = sertifikaID;
            this.DialogOpen();
        }

        public Int32? SertifikaID
        {
            get { return Sertifika != null ? this.Sertifika.Id : null; }
            set
            {
                if (this.Sertifika == null || this.Sertifika.Id != value)
                {
                    var sertID = value;
                    HelalSertifikaService.Retrieve(new RetrieveRequest
                    {
                        EntityId = sertID.Value
                    }, onSuccess: response =>
                    {
                        Sertifika = response.Entity;
                        this.SertifikaResimGrid.SertifikaRow = this.Sertifika;
                        UpdateTitle();
                    });
                }
            }
        }
    }
}
   