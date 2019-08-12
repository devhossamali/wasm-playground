#[no_mangle]
pub fn get_total(number: u32) -> u32 {
    let mut total = 0;
    for i in 0..number {
        total += i;
    }
    return total;
}
