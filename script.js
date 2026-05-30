document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('enquiryForm');

  if(form){
    form.addEventListener('submit', function(e){

      e.preventDefault();

      const name = document.getElementById('name').value;
      const agency = document.getElementById('agency').value;
      const mobile = document.getElementById('mobile').value;
      const message = document.getElementById('message').value;

      const whatsappText =
`Hello INIYAN AI CREATIVES,

Name: ${name}
Travel Agency: ${agency}
Mobile: ${mobile}

Requirement:
${message}`;

      window.open(
        'https://wa.me/917200893968?text=' +
        encodeURIComponent(whatsappText),
        '_blank'
      );

    });
  }

});