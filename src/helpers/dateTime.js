
export const dateTime = () => {

    const currentTime = () => {
        let e = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        let t = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let a = new Date();
        let i = a.getFullYear();
        // 1e3 > i && (i += 1900);
        let s = a.getDay();
        let n = a.getMonth();
        let r = a.getDate();
        // 10 > r && (r = "0" + r);
        let l = a.getHours();
        let c = a.getMinutes();
        let h = a.getSeconds();
        let o = "AM";

        l >= 12 && (o = "PM");
        l > 12 && (l -= 12);
        0 === l && (l = 12);
        9 >= c && (c = "0" + c);
        9 >= h && (h = "0" + h);

        const time = {
            dateTime_day: e[s],
            dateTime_date: t[n] + " " + r + ", " + i,
            dateTime_time: l + ":" + c + ":" + h + " " + o,
        }

        return time;
    }

    return currentTime;
}
