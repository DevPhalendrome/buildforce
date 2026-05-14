(function(){
  'use strict';

  document.querySelectorAll('[id^="year"]').forEach(function(el){
    if(el) el.textContent = new Date().getFullYear();
  });

  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal, .stag').forEach(function(el){
    obs.observe(el);
  });

  var pfObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('pf-revealed');
        pfObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.portfolio-item').forEach(function(el, i){
    el.style.transitionDelay = (i * 0.05) + 's';
    pfObserver.observe(el);
  });

  var counters = document.querySelectorAll('.stat-number');
  var counterObs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var el = entry.target;
        var target = parseInt(el.textContent.replace(/[^0-9]/g, ''), 10);
        if(!target) return;
        el.textContent = '0';
        var current = 0;
        var inc = Math.ceil(target / 50);
        var t = setInterval(function(){
          current += inc;
          if(current >= target){ current = target; clearInterval(t); }
          el.textContent = current + '+';
        }, 25);
        counterObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function(el){ counterObs.observe(el); });

  var toggle = document.querySelector('.nav-toggle');
  var overlay = document.querySelector('.mobile-overlay');

  if(toggle && overlay){
    toggle.addEventListener('click', function(){
      var open = overlay.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    overlay.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        overlay.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  var filterBtns = document.querySelectorAll('.gallery-filter');
  var galleryItems = document.querySelectorAll('.gallery-item');

  if(filterBtns.length && galleryItems.length){
    filterBtns.forEach(function(btn){
      btn.addEventListener('click', function(){
        filterBtns.forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');

        galleryItems.forEach(function(item){
          var cats = item.getAttribute('data-category');
          if(filter === 'all' || (cats && cats.indexOf(filter) !== -1)){
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  var form = document.getElementById('contactForm');
  if(form){
    var fields = {
      name: form.querySelector('[name="name"]'),
      email: form.querySelector('[name="email"]'),
      message: form.querySelector('[name="message"]')
    };

    function validate(field){
      if(!field) return true;
      var val = field.value.trim();
      var ok = true;
      var msg = '';

      if(field.name === 'email'){
        if(!val){ ok = false; msg = 'Email is required'; }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){ ok = false; msg = 'Please enter a valid email'; }
      } else if(field.hasAttribute('required')){
        if(!val){ ok = false; msg = 'This field is required'; }
      }

      var err = field.parentNode.querySelector('.field-error');
      if(!ok){
        field.classList.add('is-invalid');
        if(!err){
          var e = document.createElement('span');
          e.className = 'field-error';
          e.textContent = msg;
          field.parentNode.appendChild(e);
        } else { err.textContent = msg; }
      } else {
        field.classList.remove('is-invalid');
        if(err) err.remove();
      }
      return ok;
    }

    Object.keys(fields).forEach(function(k){
      var field = fields[k];
      if(field){
        field.addEventListener('blur', function(){ validate(field); });
        field.addEventListener('input', function(){ if(field.classList.contains('is-invalid')) validate(field); });
      }
    });

    form.addEventListener('submit', async function(e){
      e.preventDefault();
      var name = (fields.name && fields.name.value.trim()) || '';
      var email = (fields.email && fields.email.value.trim()) || '';
      var phone = (form.querySelector('[name="phone"]') && form.querySelector('[name="phone"]').value.trim()) || '';
      var service = (form.querySelector('[name="service"]') && form.querySelector('[name="service"]').value) || '';
      var message = (fields.message && fields.message.value.trim()) || '';
      var result = document.getElementById('formResult');
      var btn = form.querySelector('button[type="submit"]');

      Object.keys(fields).forEach(function(k){ if(fields[k]) validate(fields[k]); });

      if(!name || !email || !message){
        if(result){ result.textContent = 'Please complete all required fields.'; result.style.color = '#EF4444'; }
        return;
      }

      btn.disabled = true;
      if(result){ result.textContent = 'Sending...'; result.style.color = ''; }

      var ep = form.dataset.endpoint;

      if(ep && ep.indexOf('{your-form-id}') === -1){
        try {
          var res = await fetch(ep, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ name: name, email: email, phone: phone, service: service, message: message })
          });
          if(res.ok){
            if(result){ result.textContent = 'Message received. We will be in touch shortly.'; result.style.color = '#22C55E'; }
            form.reset();
          } else { throw new Error('fail'); }
        } catch(_){
          if(result) result.textContent = 'Opening your email client...';
          window.location.href = 'mailto:phalendrome@outlook.com?subject=' + encodeURIComponent('Buildforce inquiry from ' + name) + '&body=' + encodeURIComponent('Service: ' + service + '\n\n' + message + '\n\nContact: ' + name + ' | ' + phone + ' | ' + email);
        }
      } else {
        if(result) result.textContent = 'Opening your email client...';
        window.location.href = 'mailto:phalendrome@outlook.com?subject=' + encodeURIComponent('Buildforce inquiry from ' + name) + '&body=' + encodeURIComponent('Service: ' + service + '\n\n' + message + '\n\nContact: ' + name + ' | ' + phone + ' | ' + email);
      }
      btn.disabled = false;
    });
  }

  var header = document.querySelector('.site-header');
  if(header){
    window.addEventListener('scroll', function(){
      header.style.borderBottomColor = window.pageYOffset > 50 ? 'rgba(255,255,255,0.08)' : 'transparent';
    }, { passive: true });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var href = anchor.getAttribute('href');
      if(href === '#') return;
      var target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
