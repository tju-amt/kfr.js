export namespace KMath {
	export function clamp(x: number, high: number, low: number): number;

	export namespace Complex {
		interface cnumber {
			real: number;
			i: number;
		}

		export function csin(x: cnumber): cnumber;
		export function csinh(x: cnumber): cnumber;
		export function ccos(x: cnumber): cnumber;
		export function ccosh(x: cnumber): cnumber;
		export function cabssqr(x: cnumber): cnumber;
		export function cabs(x: cnumber): cnumber;
		export function carg(x: cnumber): cnumber;
		export function clog(x: cnumber): cnumber;
		export function clog2(x: cnumber): cnumber;
		export function clog10(x: cnumber): cnumber;
		export function cexp(x: cnumber): cnumber;
		export function cexp2(x: cnumber): cnumber;
		export function cexp10(x: cnumber): cnumber;
		export function polar(x: cnumber): cnumber;
		export function cartesian(x: cnumber): cnumber;
		export function csqrt(x: cnumber): cnumber;
		export function csqr(x: cnumber): cnumber;
	}

	export class Complex {

	}
}
