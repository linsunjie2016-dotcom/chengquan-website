(() => {
  const menu = document.querySelector('.research-page .menu-toggle, .contact-research .menu-toggle');
  const nav = document.getElementById('nav-list');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
        menu.focus();
      }
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false');
    }));
  }
  const mobileReading = matchMedia('(max-width: 800px)');
  const responsiveToc = document.querySelector('[data-responsive-toc]');
  if (responsiveToc) {
    const setToc = () => { responsiveToc.open = !mobileReading.matches; };
    setToc(); mobileReading.addEventListener('change', setToc);
  }
  const topics = {
    'manufacturing-export': {title:'交流制造业出海方向', intro:'从主营产品、工艺和样品情况出发，讨论采购场景、开发资料与海外渠道准备。', message:'我看了橙荃的2027制造业出海研究。我们主营____，现有工艺与样品情况是____，目标市场是____。想交流适合的采购场景、产品方向及出海准备。', href:'/insights/2027-manufacturing-export-opportunities'},
    'bedroom-furniture': {title:'交流卧室家具出海准备', intro:'带上主营产品、材料工艺、定制范围与样品情况，一起讨论目标买家、产品系列、采购资料和渠道准备。', message:'我看了橙荃的卧室家具研究。我们主营____，材料与工艺是____，可定制范围和样品情况是____。想交流欧洲或北美的目标买家、床组开发与出海准备。', href:'/insights/europe-north-america-bedroom-furniture'},
    'onboarding': {title:'咨询阿里国际站开户', intro:'带上企业名称、主营产品和现有外贸基础，先了解入驻准备与可选方案。', message:'我们是____，主营____，目前外贸基础是____。想咨询阿里国际站入驻条件、资料与方案。', href:'/services/alibaba-onboarding'},
    'operations': {title:'咨询阿里国际站运营指导', intro:'说明店铺经营阶段、团队配置和当前问题，一起确定需要协同的事项。', message:'我们主营____，店铺目前处于____阶段，团队配置是____。想交流产品表达、询盘跟进或数据复盘方面的问题：____。', href:'/services/alibaba-operations'},
    'website': {title:'咨询独立站与 SEO / GEO 服务', intro:'独立站服务另行收费。请说明行业、目标市场与语言、现有网站及内容基础，沟通交付范围与行业商机保障方案。', message:'我们主营____，目标市场与语言是____，已有网站是____（如无请注明）。希望咨询建站、多语言、SEO/GEO 与内容维护，了解本行业的商机保障数量、周期、验收口径及费用。', href:'/services/b2b-website'},
    'ss27-open-knit': {title:'交流针织产品方向', intro:'从主营款式、常用纱线、设备与打样情况出发，讨论适合的产品开发方向、海外买家资料与渠道准备。', message:'我看了橙荃的镂空针织研究。我们主营____，常用纱线与设备是____，目前打样能力是____。想交流适合的产品方向及出海准备。', href:'/insights/ss27-open-knit-development'},
    'luggage-oem': {title:'交流箱包出海准备', intro:'带上现有主箱、结构优势与配套情况，一起梳理目标出行场景、试单条件、产品表达与海外客户开发准备。', message:'我看了橙荃的箱包研究。我们主营____，现有主箱与配套能力是____，起订和定制条件是____。想交流适合的产品组合及出海准备。', href:'/insights/2027-luggage-oem-development'}
  };
  const messageBox = document.getElementById('consultation-message');
  if (messageBox) {
    const key = new URLSearchParams(location.search).get('source');
    const topic = Object.hasOwn(topics, key) ? topics[key] : null;
    if (topic) {
      document.getElementById('consultation-title').textContent = topic.title;
      document.getElementById('consultation-title').title = topic.title;
      document.getElementById('consultation-intro').textContent = topic.intro;
      messageBox.value = topic.message;
      const back = document.getElementById('consultation-back');
      back.href = topic.href; back.textContent = ['onboarding','operations','website'].includes(key) ? '返回刚才的服务介绍 →' : '返回刚才的行业研究 →';
      back.title = back.textContent;
    }
    document.getElementById('copy-consultation').addEventListener('click', async () => {
      const status = document.getElementById('copy-consultation-status');
      try {
        await navigator.clipboard.writeText(messageBox.value);
        status.textContent = '已复制，可粘贴到微信发送给 Jack。';
      } catch {
        messageBox.focus(); messageBox.select();
        status.textContent = '请复制已选中的文字，再粘贴到微信。';
      }
    });
  }
  const search = document.getElementById('research-search');
  const filters = Array.from(document.querySelectorAll('[data-research-filter]'));
  const cards = Array.from(document.querySelectorAll('[data-research-category]'));
  const count = document.getElementById('research-count');
  const empty = document.getElementById('research-empty');
  let category = 'all';
  function filterStudies() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matches = (category === 'all' || card.dataset.researchCategory === category)
        && (!query || (card.dataset.search + ' ' + card.textContent).toLocaleLowerCase().includes(query));
      card.hidden = !matches;
      if (matches) visible++;
    });
    if (count) count.textContent = `显示 ${visible} 篇季度研究`;
    if (empty) empty.hidden = visible !== 0;
  }
  if (search) {
    search.addEventListener('input', filterStudies);
    filters.forEach(button => button.addEventListener('click', () => {
      category = button.dataset.researchFilter;
      filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      filterStudies();
    }));
  }
  const progress = document.querySelector('.article-progress span');
  const content = document.querySelector('.article-content');
  const tocLinks = Array.from(document.querySelectorAll('.article-toc-list a'));
  if (content && progress) {
    let scheduled = false;
    function updateArticle() {
      const start = document.querySelector('.article-lead-brief')?.offsetTop ?? content.offsetTop;
      const end = start + content.offsetHeight - innerHeight;
      const fraction = Math.max(0, Math.min(1, (scrollY - start) / Math.max(end - start, 1)));
      progress.style.transform = `scaleX(${fraction})`;
      let current = tocLinks[0];
      tocLinks.forEach(link => {
        const target = document.getElementById(link.hash.slice(1));
        if (target && target.getBoundingClientRect().top <= 155) current = link;
      });
      tocLinks.forEach(link => {
        link.classList.toggle('is-current', link === current);
        if (link === current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      scheduled = false;
    }
    const schedule = () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateArticle); } };
    addEventListener('scroll', schedule, {passive: true});
    addEventListener('resize', schedule);
    updateArticle();
  }
  const calculator = document.getElementById('reorder-calculator');
  if (calculator) {
    const inputs = Array.from(calculator.querySelectorAll('input'));
    const output = document.getElementById('reorder-result');
    const compute = () => {
      if (inputs.some(input => input.value === '' || !input.validity.valid)) {
        output.textContent = '请填写有效的非负数值；补货周期至少为 1 天。'; return;
      }
      const [daily, days, buffer] = inputs.map(input => Number(input.value));
      const result = Math.ceil(daily * days + buffer);
      output.replaceChildren('示例补货点：');
      const strong = document.createElement('strong'); strong.textContent = result.toLocaleString('zh-CN');
      output.append(strong, '套');
    };
    inputs.forEach(input => input.addEventListener('input', compute));
    compute();
  }
})();
