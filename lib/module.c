// #include <kfr/base.hpp>
// #include <kfr/dft.hpp>
// #include <kfr/dsp.hpp>
#include <emscripten/emscripten.h>
#include <stdio.h>
#include "kfrs/kfr_capi.h"

int main() {
	kfr_f64 a[7] = {0.f, 0.25f, -0.25f, 0.5f, -0.5f, 1.f, -1.f};


	printf("hello");
	printf("%f", a[1]);
	kfr_filter_create_fir_plan_f64(a, 40);

	return 0;
}

// extern "C" {
	// double math_hyperbolic_cosh(double x);
	// double math_hyperbolic_coshsinh(double x);
	// double math_hyperbolic_coth(double x);
	// double math_hyperbolic_sinh(double x);
	// double math_hyperbolic_sinhcosh(double x);
	// double math_hyperbolic_tanh(double x);
	// KFR_API_SPEC KFR_FILTER_F64* kfr_filter_create_fir_plan_f64(const kfr_f64* taps, size_t size);
// }

// EMSCRIPTEN_KEEPALIVE
// double math_hyperbolic_cosh(double x) {
// 	return x * 0.554;
// }

// EMSCRIPTEN_KEEPALIVE
// double m_kfr_filter_create_fir_plan_f64(double x) {
// 	return kfr_filter_create_fir_plan_f64(x);
// }

