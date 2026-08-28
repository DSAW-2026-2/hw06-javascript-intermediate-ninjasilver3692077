/* global challenges */
const ALL = 'all';

const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const statusFilter = document.getElementById('status-filter');
const groupFilter = document.getElementById('group-filter');
const sortSelect = document.getElementById('sort-select');
const clearFiltersButton = document.getElementById('clear-filters');
const challengeList = document.getElementById('challenge-list');
const resultsCount = document.getElementById('results-count');
const statsPanel = document.getElementById('stats');
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

const uniqueValues = (property) =>
  [...new Set(challenges.map((challenge) => challenge[property]))]
    .sort((a, b) => a.localeCompare(b, 'en'));

const fillSelect = (select, options, allLabel) => {
  select.innerHTML = [
    `<option value="${ALL}">${allLabel}</option>`,
    ...options.map((value) => `<option value="${value}">${value}</option>`)
  ].join('');
};

fillSelect(categoryFilter, uniqueValues('category'), 'All categories');
fillSelect(statusFilter, uniqueValues('status'), 'All statuses');
fillSelect(groupFilter, uniqueValues('group'), 'All groups');

const getFilteredChallenges = () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedStatus = statusFilter.value;
  const selectedGroup = groupFilter.value;

  return challenges.filter(({ title, category, status, group }) => {
    const matchesText = title.toLowerCase().includes(searchTerm) || group.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === ALL || category === selectedCategory;
    const matchesStatus = selectedStatus === ALL || status === selectedStatus;
    const matchesGroup = selectedGroup === ALL || group === selectedGroup;
    return matchesText && matchesCategory && matchesStatus && matchesGroup;
  });
};

const sortChallenges = (items) => {
  const criterion = sortSelect.value;
  const copy = [...items];
  const comparators = {
    'title-asc': (a, b) => a.title.localeCompare(b.title, 'en'),
    'title-desc': (a, b) => b.title.localeCompare(a.title, 'en'),
    'points-asc': (a, b) => a.points - b.points,
    'points-desc': (a, b) => b.points - a.points
  };
  return comparators[criterion] ? copy.sort(comparators[criterion]) : copy;
};

const getStatusClasses = (status) => {
  const classes = {
    Active: 'border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300',
    Completed: 'border-green-200 bg-green-100 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300',
    Expired: 'border-red-200 bg-red-100 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300'
  };
  return classes[status];
};

const renderChallenges = (items) => {
  resultsCount.textContent = `${items.length} challenge${items.length === 1 ? '' : 's'} found`;
  challengeList.innerHTML = items.length === 0
    ? '<div class="md:col-span-2 xl:col-span-3 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">No challenges match the current search and filters.</div>'
    : items.map(({ id, title, category, group, deadline, status, points, participants }) => `
      <article class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
        <div class="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 dark:border-slate-800">
          <span class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Challenge #${id}</span>
          <span class="rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClasses(status)}">${status}</span>
        </div>
        <div class="p-5">
          <span class="inline-block rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">${category}</span>
          <h3 class="mt-3 text-xl font-bold leading-snug">${title}</h3>
          <dl class="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div><dt class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Group</dt><dd class="mt-1 font-medium">${group}</dd></div>
            <div><dt class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Deadline</dt><dd class="mt-1 font-medium">${deadline}</dd></div>
            <div><dt class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Points</dt><dd class="mt-1 font-bold text-blue-700 dark:text-blue-300">${points}</dd></div>
            <div><dt class="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Participants</dt><dd class="mt-1 font-medium">${participants}</dd></div>
          </dl>
        </div>
      </article>`).join('');
};

const calculateStats = (items) => {
  const summary = items.reduce(
    (accumulator, { category, points, status }) => ({
      total: accumulator.total + 1,
      totalPoints: accumulator.totalPoints + points,
      active: accumulator.active + (status === 'Active' ? 1 : 0),
      byCategory: {
        ...accumulator.byCategory,
        [category]: (accumulator.byCategory[category] || 0) + 1
      }
    }),
    { total: 0, totalPoints: 0, active: 0, byCategory: {} }
  );

  const averagePoints = summary.total === 0 ? 0 : Math.round((summary.totalPoints / summary.total) * 10) / 10;
  return { ...summary, averagePoints };
};

const renderStats = (items) => {
  const { total, totalPoints, active, averagePoints, byCategory } = calculateStats(items);
  const categorySummary = Object.entries(byCategory).map(([category, count]) => `${category}: ${count}`).join(' · ');
  statsPanel.innerHTML = `
    <article class="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950"><p class="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-300">Challenges shown</p><p class="mt-2 text-3xl font-bold text-blue-800 dark:text-blue-200">${total}</p></article>
    <article class="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"><p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Active</p><p class="mt-2 text-3xl font-bold">${active}</p></article>
    <article class="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"><p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Average points</p><p class="mt-2 text-3xl font-bold">${averagePoints}</p></article>
    <article class="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"><p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Available points</p><p class="mt-2 text-3xl font-bold">${totalPoints}</p></article>
    <p class="sm:col-span-2 lg:col-span-4 text-sm text-slate-500 dark:text-slate-400">${categorySummary || 'No category data for the current filters.'}</p>`;
};

const updateView = () => {
  const filtered = getFilteredChallenges();
  const sorted = sortChallenges(filtered);
  renderChallenges(sorted);
  renderStats(sorted);
};

const resetControls = () => {
  searchInput.value = '';
  categoryFilter.value = ALL;
  statusFilter.value = ALL;
  groupFilter.value = ALL;
  sortSelect.value = 'original';
  updateView();
};

const updateThemeButton = () => {
  const isDark = document.documentElement.classList.contains('dark');
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
};

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeButton();
});

searchInput.addEventListener('input', updateView);
[categoryFilter, statusFilter, groupFilter, sortSelect].forEach((control) => control.addEventListener('change', updateView));
clearFiltersButton.addEventListener('click', resetControls);

updateThemeButton();
updateView();
