@extends('layouts.master')

@section('title')
    Input Group
@endsection

@section('topbar-title')
    Forms
@endsection

@section('css')
@endsection

@section('content')
    <div class="row">
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header card-header-bordered">
                    <h3 class="card-title">Basic</h3>
                </div>
                <div class="card-body">
                    <p class="text-muted">Place one add-on or button on either side of an input. You may also place one on
                        both sides of an input. Remember to place <code>&lt;label&gt;</code>s outside the input group.</p>

                    <div class="d-grid gap-3">
                        <div class="input-group"><span class="input-group-text" id="basic-addon1">@</span> <input
                                type="text" class="form-control" placeholder="Username" /></div>
                        <div class="input-group"><input type="text" class="form-control"
                                placeholder="Recipient's username" /> <span class="input-group-text"
                                id="basic-addon2">@example.com</span></div>
                        <div>
                            <label for="basic-url" class="form-label">Your vanity URL</label>
                            <div class="input-group"><span class="input-group-text"
                                    id="basic-addon3">https://example.com/users/</span> <input type="text"
                                    class="form-control" id="basic-url" /></div>
                        </div>
                        <div class="input-group"><span class="input-group-text">$</span> <input type="text"
                                class="form-control" /> <span class="input-group-text">.00</span></div>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Username" /> <span
                                class="input-group-text">@</span> <input type="text" class="form-control"
                                placeholder="Server" />
                        </div>
                        <div class="input-group"><span class="input-group-text">With textarea</span>
                            <textarea class="form-control"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header card-header-bordered">
                    <h3 class="card-title">Multiple inputs</h3>
                </div>
                <div class="card-body">
                    <p class="text-muted">While multiple <code>&lt;input&gt;</code>s are supported visually, validation
                        styles are only available for input groups with a single <code>&lt;input&gt;</code>.</p>

                    <div class="input-group">
                        <span class="input-group-text">First and last name</span> <input type="text"
                            aria-label="First name" class="form-control" /> <input type="text" aria-label="Last name"
                            class="form-control" />
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header card-header-bordered">
                    <h3 class="card-title">Button addons</h3>
                </div>
                <div class="card-body">
                    <div class="d-grid gap-3">
                        <div class="input-group">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                            <input type="text" class="form-control" placeholder=""
                                aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder=""
                                aria-label="Example text with two button addons" /> <button
                                class="btn btn-outline-secondary" type="button">Button</button>
                            <button class="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                        <div class="input-group">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                                data-bs-toggle="dropdown">Dropdown</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control" /> <button type="button"
                                class="btn btn-outline-secondary">Action</button>
                            <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"><span class="visually-hidden">Toggle Dropdown</span></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card">
                <div class="card-header card-header-bordered">
                    <h3 class="card-title">Sizing</h3>
                </div>
                <div class="card-body">
                    <p class="text-muted">Add the relative form sizing classes to the <code>.input-group</code> itself and
                        contents within will automatically resize—no need for repeating the form control size classes on
                        each element.</p>

                    <div class="d-grid gap-3">
                        <div class="input-group input-group-sm"><span class="input-group-text"
                                id="inputGroup-sizing-sm">Small</span> <input type="text" class="form-control" />
                        </div>
                        <div class="input-group"><span class="input-group-text"
                                id="inputGroup-sizing-default">Default</span> <input type="text"
                                class="form-control" /></div>
                        <div class="input-group input-group-lg"><span class="input-group-text"
                                id="inputGroup-sizing-lg">Large</span> <input type="text" class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header card-header-bordered">
                    <h3 class="card-title">Checkboxes and radios</h3>
                </div>
                <div class="card-body">
                    <p class="text-muted">
                        Place any checkbox or radio option within an input group’s addon instead of text. We recommend
                        adding <code>.mt-0</code> to the <code>.form-check-input</code> when there’s no visible text next to
                        the input.
                    </p>

                    <div class="d-grid gap-3">
                        <div class="input-group">
                            <div class="input-group-text"><input class="form-check-input mt-0" type="checkbox"
                                    value="" aria-label="Checkbox for following text input" /></div>
                            <input type="text" class="form-control" aria-label="Text input with checkbox" />
                        </div>
                        <div class="input-group">
                            <div class="input-group-text"><input class="form-check-input mt-0" type="radio"
                                    value="" aria-label="Radio button for following text input" /></div>
                            <input type="text" class="form-control" aria-label="Text input with radio button" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header card-header-bordered">
                    <h3 class="card-title">Multiple addons</h3>
                </div>
                <div class="card-body">
                    <p class="text-muted">Multiple add-ons are supported and can be mixed with checkbox and radio input
                        versions.</p>

                    <div class="d-grid gap-3">
                        <div class="input-group">
                            <span class="input-group-text">$</span> <span class="input-group-text">0.00</span> <input
                                type="text" class="form-control"
                                aria-label="Dollar amount (with dot and two decimal places)" />
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control"
                                aria-label="Dollar amount (with dot and two decimal places)" /> <span
                                class="input-group-text">$</span> <span class="input-group-text">0.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header card-header-bordered">
                    <h3 class="card-title">Custom inputs</h3>
                </div>
                <div class="card-body">
                    <div class="d-grid gap-3">
                        <div class="input-group">
                            <label class="input-group-text mb-0" for="inputGroupSelect01">Options</label>
                            <select class="form-select" id="inputGroupSelect01">
                                <option selected="selected">Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <input type="file" class="form-control" id="inputGroupFile04"
                                aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                            <button class="btn btn-outline-secondary" type="button"
                                id="inputGroupFileAddon04">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
@endsection

@section('scripts')
    <script src="{{ URL::asset('build/js/app.js') }}"></script>
@endsection
