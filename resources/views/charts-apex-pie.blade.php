@extends('layouts.master')

@section('title')
    Pie Charts
@endsection

@section('topbar-title')
    Apexcharts
@endsection

@section('css')
@endsection

@section('content')
    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title mb-0">Simple Pie Chart</h4>
                </div><!-- end card header -->

                <div class="card-body">
                    <div id="simple_pie_chart"
                        data-colors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-danger", "--bs-info"]'
                        class="apex-charts" dir="ltr"></div>
                </div><!-- end card-body -->
            </div><!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title mb-0">Simple Donut Chart</h4>
                </div><!-- end card header -->

                <div class="card-body">
                    <div id="simple_dount_chart"
                        data-colors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-danger", "--bs-info"]'
                        class="apex-charts" dir="ltr"></div>
                </div><!-- end card-body -->
            </div><!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title mb-0">Updating Donut Chart</h4>
                </div><!-- end card header -->

                <div class="card-body">
                    <div>
                        <div id="updating_donut_chart"
                            data-colors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-danger", "--bs-info"]'
                            class="apex-charts" dir="ltr"></div>

                        <div class="d-flex align-items-start flex-wrap gap-2 justify-content-center mt-4">
                            <button id="add" class="btn btn-light btn-sm">
                                + ADD
                            </button>

                            <button id="remove" class="btn btn-light btn-sm">
                                - REMOVE
                            </button>

                            <button id="randomize" class="btn btn-light btn-sm">
                                RANDOMIZE
                            </button>

                            <button id="reset" class="btn btn-light btn-sm">
                                RESET
                            </button>
                        </div>
                    </div>
                </div><!-- end card-body -->
            </div><!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title mb-0">Monochrome Pie Chart</h4>
                </div><!-- end card header -->

                <div class="card-body">
                    <div id="monochrome_pie_chart" data-colors='["--bs-primary"]' class="apex-charts" dir="ltr"></div>
                </div><!-- end card-body -->
            </div><!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title mb-0">Gradient Donut Chart</h4>
                </div><!-- end card header -->

                <div class="card-body">
                    <div id="gradient_chart"
                        data-colors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-danger", "--bs-info"]'
                        class="apex-charts" dir="ltr"></div>
                </div><!-- end card-body -->
            </div><!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title mb-0">Patterned Donut Chart</h4>
                </div><!-- end card header -->

                <div class="card-body">
                    <div id="pattern_chart"
                        data-colors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-danger", "--bs-info"]'
                        class="apex-charts" dir="ltr"></div>
                </div><!-- end card-body -->
            </div><!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title mb-0">Pie Chart with Image Fill</h4>
                </div><!-- end card header -->

                <div class="card-body">
                    <div id="image_pie_chart" data-colors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]'
                        class="apex-charts" dir="ltr"></div>
                </div><!-- end card-body -->
            </div><!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title mb-0">Semi Donut Chart</h4>
                </div><!-- end card header -->

                <div class="card-body">
                    <div id="semi_donut_chart" data-colors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]'
                        class="apex-charts" dir="ltr"></div>
                </div><!-- end card-body -->
            </div><!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->
@endsection

@section('scripts')
    <!-- apexcharts -->
    <script src="{{ URL::asset('build/libs/apexcharts/dist/apexcharts.min.js') }}"></script>
    <!-- piecharts init -->
    <script src="{{ URL::asset('build/js/pages/apexcharts-pie.init.js') }}"></script>
    <script src="{{ URL::asset('build/js/app.js') }}"></script>
@endsection
