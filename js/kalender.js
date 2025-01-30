// Data hari dalam seminggu
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// Tanggal saat ini
let currentDate = new Date();

// Daftar hari libur (format: "YYYY-MM-DD")
const holidays = [
    { date: "2025-01-01", description: "Tahun Baru 2025 Masehi" },
    { date: "2025-01-27", description: "Isra Mikraj Nabi Muhammad saw" },
    { date: "2025-01-29", description: "Tahun Baru Imlek 2576 Kongzili" },
    { date: "2025-03-29", description: "Hari Suci Nyepi (Tahun Baru Saka 1947)" },
    { date: "2025-03-31", description: "Idulfitri 1446 Hijriah" },
    { date: "2025-04-01", description: "Idulfitri 1446 Hijriah" },
    { date: "2025-04-18", description: "Wafat Yesus Kristus" },
    { date: "2025-04-20", description: "Kebangkitan Yesus Kristus (Paskah)" },
    { date: "2025-05-01", description: "Hari Buruh Internasional" },
    { date: "2025-05-12", description: "Hari Raya Waisak 2569 BE" },
    { date: "2025-05-29", description: "Kenaikan Yesus Kristus" },
    { date: "2025-06-01", description: "Hari Lahir Pancasila" },
    { date: "2025-06-06", description: "Iduladha 1446 Hijriah" },
    { date: "2025-06-27", description: "1 Muharam Tahun Baru Islam 1447 Hijriah" },
    { date: "2025-08-17", description: "Proklamasi Kemerdekaan" },
    { date: "2025-09-05", description: "Maulid Nabi Muhammad saw" },
    { date: "2025-12-25", description: "Kelahiran Yesus Kristus" },
    { date: "2025-01-28", description: "Tahun Baru Imlek 2576 Kongzili (Cuti Bersama)" },
    { date: "2025-03-28", description: "Hari Suci Nyepi (Tahun Baru Saka 1947) (Cuti Bersama)" },
    { date: "2025-04-02", description: "Idulfitri 1446 Hijriah (Cuti Bersama)" },
    { date: "2025-04-03", description: "Idulfitri 1446 Hijriah (Cuti Bersama)" },
    { date: "2025-04-04", description: "Idulfitri 1446 Hijriah (Cuti Bersama)" },
    { date: "2025-04-07", description: "Idulfitri 1446 Hijriah (Cuti Bersama)" },
    { date: "2025-05-13", description: "Hari Raya Waisak 2569 BE (Cuti Bersama)" },
    { date: "2025-05-30", description: "Kenaikan Yesus Kristus (Cuti Bersama)" },
    { date: "2025-06-09", description: "Idul Adha 1446 Hijriah (Cuti Bersama)" },
    { date: "2025-12-26", description: "Kelahiran Yesus Kristus (Cuti Bersama)" }
];


// Fungsi untuk merender kalender
const renderCalendar = () => {
    const monthElement = document.getElementById("month");
    const yearElement = document.getElementById("year");
    const weekdaysContainer = document.querySelector(".weekdays");
    const daysContainer = document.querySelector(".days");
    const eventList = document.getElementById("eventList");

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Menghitung hari pertama bulan ini
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Menampilkan bulan dan tahun
    monthElement.textContent = currentDate.toLocaleString("default", { month: "long" });
    yearElement.textContent = year;

    weekdaysContainer.innerHTML = weekdays.map(day => `<div>${day}</div>`).join("");

    daysContainer.innerHTML = "";
    eventList.innerHTML = ""; // Mengosongkan tabel event sebelum merender ulang

    // Menyesuaikan hari pertama agar Senin menjadi 0 dan Minggu menjadi 6
    const adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1;

    // Menampilkan hari-hari kosong di awal bulan
    for (let i = 0; i < adjustedFirstDay; i++) {
        daysContainer.innerHTML += `<div class="empty"></div>`;
    }

    // Menampilkan tanggal dalam bulan
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();

        // Cek apakah tanggal ini adalah hari libur
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const holiday = holidays.find(holiday => holiday.date === dateString);
        const isHoliday = Boolean(holiday);

        // Tentukan kelas berdasarkan hari
        let dayClass = "";
        if (isHoliday) {
            dayClass = "holiday"; // Prioritas untuk hari libur
        } else if (date.getDay() === 6) {  // Sabtu
            dayClass = "saturday";
        } else if (date.getDay() === 0) {  // Minggu
            dayClass = "sunday";
        } else if (date.getDay() === 5) {  // Jumat
            dayClass = "friday";
        }

        // Menandai hari-hari tertentu
        daysContainer.innerHTML += `<div class="${isToday ? "today" : ""} ${dayClass}">${day}</div>`;

        // Jika hari libur, tambahkan ke tabel event
        if (isHoliday) {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${day} ${monthElement.textContent} ${year} - ${holiday.description}</td>`;
            eventList.appendChild(row);
        }
    }
};

// Event listener untuk navigasi bulan
document.getElementById("prevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Render kalender pertama kali
renderCalendar();
